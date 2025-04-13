import {createHydrogenContext} from '@shopify/hydrogen';

import {CART_QUERY_FRAGMENT} from '~/lib/fragments';
import {getLocaleFromRequest} from '~/lib/i18n';
import {AppSession} from '~/lib/session';
import {createWeaverseClient} from '~/weaverse/weaverse.server';

/**
 * The context implementation is separate from server.ts
 * so that type can be extracted for AppLoadContext
 * */
export async function createAppLoadContext(
  request: Request,
  env: Env,
  executionContext: ExecutionContext,
) {
  /**
   * Open a cache instance in the worker and a custom session instance.
   */
  if (!env?.SESSION_SECRET) {
    throw new Error('SESSION_SECRET environment variable is not set');
  }

  const waitUntil = executionContext.waitUntil.bind(executionContext);
  const [cache, session] = await Promise.all([
    caches.open('hydrogen'),
    AppSession.init(request, [env.SESSION_SECRET]),
  ]);

  const i18n = getLocaleFromRequest(request);

  const hydrogenContext = createHydrogenContext({
    cache,
    cart: {
      queryFragment: CART_QUERY_FRAGMENT,
    },
    env,
    i18n,
    request,
    session,
    waitUntil,
  });

  const weaverse = createWeaverseClient({
    ...hydrogenContext,
    cache,
    env,
    request,
    waitUntil,
  });

  return {
    ...hydrogenContext,
    // declare additional Remix loader context
    weaverse,
  };
}
