import type {SerializeFrom} from '@remix-run/server-runtime/dist/single-fetch';
import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {useMatches} from '@remix-run/react';
import {getShopAnalytics} from '@shopify/hydrogen';
import {data} from '@shopify/remix-oxygen';
import {getClientLocales} from 'remix-utils/locales/server';

import {FOOTER_MENU_HANDLE} from '~/config/constants';
import {MENU_QUERY} from '~/graphql/storefront/queries';
import {csrf} from '~/lib/csrf-token/csrf.server';
import {websiteSeo} from '~/seo/website';

export function useRootLoaderDataServer() {
  const [root] = useMatches();
  return root?.data as SerializeFrom<typeof rootLoader>;
}

export const rootLoader = async (args: LoaderFunctionArgs) => {
  const {context, request} = args;
  const {origin} = new URL(request.url);

  const deferredData = loadDeferredData(args);
  const locales = getClientLocales(request);

  // const [weaverseTheme] = await Promise.all([
  const [[token, csrfCookie], weaverseTheme] = await Promise.all([
    csrf.commitToken(request),
    context.weaverse.loadThemeSettings(),
  ]);

  const {
    cart,
    config,
    customer,
    env,
    isLoggedIn,
    navigation,
    shopify,
    store,
    storeDomain,
    storefront,
    ua,
  } = context;

  const headers = new Headers();
  headers.append('Set-Cookie', csrfCookie || '');

  const {jsonLd, seo} = websiteSeo({request, shopify, socials: []});

  return data(
    {
      ...deferredData,
      cart,
      config,
      consent: {
        checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN || env.PUBLIC_STORE_DOMAIN,
        country: storefront.i18n.country,
        language: storefront.i18n.language,
        storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        withPrivacyBanner: true,
      },
      customer,
      env: {
        /** Be careful not to expose any sensitive environment variables here. */
        NODE_ENV: process.env.NODE_ENV,
      },
      gaId: '',
      gtmId: '',
      isLoggedIn,
      jsonLd,
      locales,
      navigation,
      origin,
      selectedLocale: storefront.i18n,
      seo,
      shop: getShopAnalytics({
        publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
        storefront,
      }),
      shopify,
      store,
      storeDomain,
      token,
      ua,
      weaverseTheme,
    },
    {headers},
  );
};

function loadDeferredData({context}: LoaderFunctionArgs) {
  const {cart, customerAccount, storefront} = context;

  const isLoggedInPromise = customerAccount.isLoggedIn();
  const cartPromise = cart.get();
  const footerPromise = storefront.query(MENU_QUERY, {
    variables: {handle: FOOTER_MENU_HANDLE},
  });

  return {
    cartPromise,
    footerPromise,
    isLoggedInPromise,
  };
}
