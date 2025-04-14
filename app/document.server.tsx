import {Links, Meta, Scripts, ScrollRestoration} from '@remix-run/react';
import {Analytics, useNonce} from '@shopify/hydrogen';
import * as React from 'react';

import nprogress from '~/styles/nprogress.css?url';
import tailwind from '~/styles/tailwind.css?url';

import {CustomAnalytics} from './analytics';
import {GoogleAnalytics, GoogleTagManager} from './analytics/google';
import {useRootLoaderDataServer} from './core/root.server';
import {JsonSchema} from './seo/json-schema';

export function Document({children}: {children?: React.ReactNode}) {
  const nonce = useNonce();
  const {cartPromise, consent, gaId, gtmId, jsonLd, shop, shopify} =
    useRootLoaderDataServer();

  return (
    <html lang={shopify.locale} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content="#0a775a" name="theme-color" />

        <meta content={shopify.name} name="copyright" />
        <meta content={shopify.name} name="author" />
        <meta content={shopify.countryCode} name="country" />
        <meta content={shopify.language} name="language" />
        <meta content={shopify.currencyCode} name="currency" />

        <link href={tailwind} rel="stylesheet" />
        <link href={nprogress} rel="stylesheet" />

        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        <Analytics.Provider cart={cartPromise} consent={consent} shop={shop}>
          <JsonSchema jsonLd={jsonLd} key="website" nonce={nonce} />
          <GoogleAnalytics gaId={gaId} />
          <GoogleTagManager gtmId={gtmId} />

          {children}

          <CustomAnalytics />
        </Analytics.Provider>

        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}
