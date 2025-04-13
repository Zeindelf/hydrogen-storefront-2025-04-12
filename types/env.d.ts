/// <reference types="vite/client" />
/// <reference types="@shopify/remix-oxygen" />
/// <reference types="@shopify/oxygen-workers-types" />

// Enhance TypeScript's built-in typings.
import '@total-typescript/ts-reset';

import type {
  HydrogenContext,
  HydrogenSessionData,
  HydrogenEnv,
} from '@shopify/hydrogen';
import {createAppLoadContext} from '~/core/context.server';
// import type {createAppLoadContext} from '~/lib/context';

declare global {
  /** A global `process` object is only available during build to access NODE_ENV. */
  interface Env extends HydrogenEnv {
    // declare additional Env parameter use in the fetch handler and Remix loader context here
    NODE_ENV: 'development' | 'production';
    PRIVATE_ACCESS_TOKEN: string
    PUBLIC_CHECKOUT_DOMAIN: string;
    PUBLIC_STOREFRONT_API_VERSION: string;
    PUBLIC_STORE_ROOT: string;
  }
}

declare module '@shopify/remix-oxygen' {
  interface AppLoadContext
    extends Awaited<ReturnType<typeof createAppLoadContext>> {
    // to change context type, change the return of createAppLoadContext() instead
  }

  interface SessionData extends HydrogenSessionData {
    // declare local additions to the Remix session data here
  }
}
