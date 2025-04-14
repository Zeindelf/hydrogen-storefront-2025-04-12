import 'unfonts.css?url';

import type {ShouldRevalidateFunction} from '@remix-run/react';
import type {SerializeFrom} from '@remix-run/server-runtime/dist/single-fetch';
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@shopify/remix-oxygen';

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
  useRouteError,
} from '@remix-run/react';
import {Analytics, useNonce} from '@shopify/hydrogen';
import {withWeaverse} from '@weaverse/hydrogen';
import {AuthenticityTokenProvider} from 'remix-utils/csrf/react';

import margemBold from '~/assets/fonts/Margem-Bold.woff2';
import margemMedium from '~/assets/fonts/Margem-Medium.woff2';
import margemRegular from '~/assets/fonts/Margem-Regular.woff2';
import nprogress from '~/styles/nprogress.css?url';
import tailwind from '~/styles/tailwind.css?url';

import {CustomAnalytics} from './analytics';
import {GoogleAnalytics, GoogleTagManager} from './analytics/google';
import {rootLoader} from './core/root.server';
import {Errors} from './pages/errors';
import {generateFaviconUrls} from './seo/favicon';
import {JsonSchema} from './seo/json-schema';
import {mimetypes} from './utils/helpers';

export type RootLoader = typeof loader;

export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data as SerializeFrom<typeof loader>;
};

/** This is important to avoid re-fetching root queries on sub-navigations */
export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentUrl,
  formMethod,
  nextUrl,
}) => {
  // revalidate when a mutation is performed e.g add to cart, login...
  if (formMethod && formMethod !== 'GET') return true;

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) return true;

  // Defaulting to no revalidation for root loader data to improve performance.
  // When using this feature, you risk your UI getting out of sync with your server.
  // Use with caution. If you are uncomfortable with this optimization, update the
  // line below to `return defaultShouldRevalidate` instead.
  // For more details see: https://remix.run/docs/en/main/route/should-revalidate
  return false;
};

export const links: LinksFunction = () => [
  {
    as: 'font',
    crossOrigin: 'anonymous',
    href: margemRegular,
    rel: 'preload',
    type: mimetypes.woff2,
  },
  {
    as: 'font',
    crossOrigin: 'anonymous',
    href: margemMedium,
    rel: 'preload',
    type: mimetypes.woff2,
  },
  {
    as: 'font',
    crossOrigin: 'anonymous',
    href: margemBold,
    rel: 'preload',
    type: mimetypes.woff2,
  },

  {href: 'http://cdn.shopify.com', rel: 'preconnect'},
  {href: 'http://cdn.shopify.com', rel: 'dns-prefetch'},
  {href: 'http://shop.app', rel: 'preconnect'},
  {href: 'http://shop.app', rel: 'dns-prefetch'},
];

export async function loader(args: LoaderFunctionArgs) {
  const data = await rootLoader(args);

  return data;
}

/** No SEO exports. Keep here to future tests inject into <head /> */
export const meta: MetaFunction<typeof loader> = (_loaderData) => {
  const favicons = generateFaviconUrls();

  return [
    // Preconnects to desired services or more links...
    ...favicons,
  ];
};

export function Layout() {
  const nonce = useNonce();
  const {cartPromise, consent, gaId, gtmId, jsonLd, shop, shopify, token} =
    useRootLoaderData();

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

          <AuthenticityTokenProvider token={token}>
            <Outlet />
          </AuthenticityTokenProvider>

          <CustomAnalytics />
        </Analytics.Provider>

        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

const App = () => <Outlet />;

export default withWeaverse(App);

export function ErrorBoundary() {
  const nonce = useNonce();
  const {shopify} = useRootLoaderData();
  const error = useRouteError();

  // !Keep as old reference
  // let errorMessage = 'Unknown error';
  // let errorStatus = 500;

  // // Throw Route errors (400, 401, 403, 404, ...)
  // if (isRouteErrorResponse(error)) {
  //   errorMessage = error?.data?.message ?? error.data;
  //   errorStatus = error.status;
  //   // Throw server errors
  // } else if (error instanceof Error) {
  //   errorMessage = error.message;
  // }

  // return (
  //   <div className="route-error">
  //     <h1>Oops</h1>
  //     <h2>{errorStatus}</h2>
  //     {errorMessage && (
  //       <fieldset>
  //         <pre>{errorMessage}</pre>
  //       </fieldset>
  //     )}
  //   </div>
  // );

  if (error instanceof Error) {
    return (
      <html lang={shopify.locale} suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />

        <link href={tailwind} rel="stylesheet" />
        <link href={nprogress} rel="stylesheet" />

        <Meta />
        <Links />
        <body>
          <Errors.ErrorFallback error={error} />

          <ScrollRestoration nonce={nonce} />
          <Scripts nonce={nonce} />
        </body>
      </html>
    );
  }

  return null;
}
