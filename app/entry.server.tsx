import type {AppLoadContext, EntryContext} from '@shopify/remix-oxygen';

import {RemixServer} from '@remix-run/react';
import {createContentSecurityPolicy} from '@shopify/hydrogen';
import * as isbotModule from 'isbot';
import {renderToReadableStream} from 'react-dom/server';

import {createCspHeaders} from './core/csp.server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  context: AppLoadContext,
) {
  /** https://shopify.dev/docs/storefronts/headless/hydrogen/content-security-policy */
  const {header, nonce, NonceProvider} = createContentSecurityPolicy({
    ...createCspHeaders(request),
    shop: {
      checkoutDomain:
        context.env.PUBLIC_CHECKOUT_DOMAIN || context.env.PUBLIC_STORE_DOMAIN,
      storeDomain: context.env.PUBLIC_STORE_DOMAIN,
    },
  });

  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} nonce={nonce} url={request.url} />
    </NonceProvider>,
    {
      nonce,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      },
      signal: request.signal,
    },
  );

  if (isBotRequest(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);
  // https://scotthelme.co.uk/hsts-the-missing-link-in-tls/
  responseHeaders.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains',
  );

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}

// We have some Remix apps in the wild already running with isbot@3 so we need
// to maintain backwards compatibility even though we want new apps to use
// isbot@4.  That way, we can ship this as a minor Semver update to @remix-run/dev.
function isBotRequest(userAgent: null | string) {
  if (!userAgent) {
    return false;
  }

  // isbot >= 3.8.0, >4
  if ('isbot' in isbotModule && typeof isbotModule.isbot === 'function') {
    return isbotModule.isbot(userAgent);
  }

  // isbot < 3.8.0
  if ('default' in isbotModule && typeof isbotModule.default === 'function') {
    // @ts-ignore
    return isbotModule.default(userAgent);
  }

  return false;
}
