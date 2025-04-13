import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {createSitemap} from '~/lib/sitemap';
import {createMainSitemap} from '~/sitemap/main';

export async function loader({context, request}: LoaderFunctionArgs) {
  const url = new URL(request.url).origin;
  const main = await createMainSitemap({context, url});

  return createSitemap(main);
}
