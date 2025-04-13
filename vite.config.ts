import type {DepOptimizationOptions} from 'vite';

import {vitePlugin as remix} from '@remix-run/dev';
import {hydrogen} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

declare module '@remix-run/server-runtime' {
  interface Future {
    v3_singleFetch: true;
  }
}

// I'm seeing an issue specifically with media-chrome/dist/react/index.js
// where the first time the dev server is loaded with no cache (delete node_modules/.vite) there is a React hooks error
// and the page does not load. This can be solved but only if the optimize deps is done ahead of time, which seems to require
// optimizeDeps and ssr.optimizeDeps.
const optimizeDeps: DepOptimizationOptions = {
  include: [],
};

export default defineConfig({
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0,
  },
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_routeConfig: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true,
      },
      presets: [hydrogen.v3preset()],
    }),
    tsconfigPaths(),
  ],
  ssr: {
    /**
     * Include dependencies here if they throw CJS<>ESM errors.
     * For example, for the following error:
     *
     * > ReferenceError: module is not defined
     * >   at /Users/.../node_modules/example-dep/index.js:1:1
     *
     * Include 'example-dep' in the array below.
     * @see https://vitejs.dev/config/dep-optimization-options
     */
    optimizeDeps,
  },
});
