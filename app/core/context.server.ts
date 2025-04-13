import type {AdminShopQuery} from 'types/generated/admin';

import {
  cartGetIdDefault,
  cartSetIdDefault,
  createHydrogenContext,
} from '@shopify/hydrogen';

import {MAIN_MENU_HANDLE} from '~/config/constants';
import {ADMIN_SHOP_QUERY} from '~/graphql/admin/queries';
import {CART_QUERY_FRAGMENT} from '~/graphql/storefront/cart';
import {
  LOCATION_QUERY,
  MENU_QUERY,
  SHOP_QUERY,
} from '~/graphql/storefront/queries';
import {getLocaleFromRequest} from '~/i18n/locale';
import {uaParser} from '~/utils/helpers';
import {createConfig, parseMenu} from '~/utils/shopify';
import {createWeaverseClient} from '~/weaverse/weaverse.server';

import {createAdminApi} from './admin.server';
import {createCustomerData} from './customer.server';
import {AppSession} from './session.server';

export async function createAppLoadContext(
  request: Request,
  env: Env,
  executionContext: ExecutionContext,
) {
  if (!env?.SESSION_SECRET) {
    throw new Error('SESSION_SECRET environment variable is not set');
  }

  const waitUntil = executionContext.waitUntil.bind(executionContext);

  /** Open a cache instance in the worker and a custom session instance. */
  const [cache, session] = await Promise.all([
    caches.open('hydrogen'),
    AppSession.init(request, [env.SESSION_SECRET]),
  ]);

  const ua = uaParser(request.headers.get('user-agent'));
  const i18n = getLocaleFromRequest(request);

  const hydrogenContext = createHydrogenContext({
    cache,
    cart: {
      getId: cartGetIdDefault(request.headers),
      queryFragment: CART_QUERY_FRAGMENT,
      setId: cartSetIdDefault({
        maxage: 60 * 60 * 24 * 365, // One year expiry
      }),
    },
    env,
    i18n,
    request,
    session,
    waitUntil,
  });

  const admin = createAdminApi({cache, env, request, waitUntil});

  const weaverse = createWeaverseClient({
    ...hydrogenContext,
    cache,
    env,
    request,
    waitUntil,
  });

  const [{shop}, {adminShop}, {localization}, {menu}, {customer, isLoggedIn}] =
    await Promise.all([
      hydrogenContext.storefront.query(SHOP_QUERY),
      admin.query<AdminShopQuery>(ADMIN_SHOP_QUERY),
      hydrogenContext.storefront.query(LOCATION_QUERY),
      hydrogenContext.storefront.query(MENU_QUERY, {
        variables: {handle: MAIN_MENU_HANDLE},
      }),
      createCustomerData(hydrogenContext.customerAccount, session),
    ]);

  const storeDomain = env.PUBLIC_STORE_DOMAIN;

  return {
    ...hydrogenContext,
    admin,
    customer,
    isLoggedIn,
    navigation: parseMenu(menu, shop.primaryDomain),
    shopify: createConfig({adminShop, localization, shop}),
    storeDomain,
    ua,
    weaverse,
  };
}
