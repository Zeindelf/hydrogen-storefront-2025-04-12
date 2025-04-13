import type {AppLoadContext, EntryContext} from '@shopify/remix-oxygen';

import {RemixServer} from '@remix-run/react';
import {createContentSecurityPolicy} from '@shopify/hydrogen';
import {isbot} from 'isbot';
import {renderToReadableStream} from 'react-dom/server';

import {getWeaverseCsp} from './weaverse/weaverse.server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  context: AppLoadContext,
) {
  const {header, nonce, NonceProvider} = createContentSecurityPolicy({
    ...getWeaverseCsp(request),
    shop: {
      checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
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

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
