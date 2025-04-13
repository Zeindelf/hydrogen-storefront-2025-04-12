import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {getSitemapIndex} from '@shopify/hydrogen';

export async function loader({context, request}: LoaderFunctionArgs) {
  const {storefront} = context;

  const response = await getSitemapIndex({
    customChildSitemaps: ['sitemap/main.xml'],
    request,
    storefront,
    types: [
      'products',
      'pages',
      'collections',
      'metaObjects',
      'articles',
      'blogs',
    ],
  });

  response.headers.set('Cache-Control', `max-age=${60 * 60 * 24}`);

  return response;
}
