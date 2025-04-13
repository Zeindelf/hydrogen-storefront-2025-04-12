import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {createSitemap} from '~/lib/sitemap';
import {ARTICLE_SITEMAP_QUERY, createArticleSitemap} from '~/sitemap/article';
import {BLOG_SITEMAP_QUERY, createBlogSitemap} from '~/sitemap/blog';
import {
  COLLECTION_SITEMAP_QUERY,
  createCollectionSitemap,
} from '~/sitemap/collection';
import {createPageSitemap, PAGE_SITEMAP_QUERY} from '~/sitemap/page';
import {createProductSitemap, PRODUCT_SITEMAP_QUERY} from '~/sitemap/product';
import {notFound} from '~/utils/helpers';

export type SitemapIndexType =
  | 'articles'
  | 'blogs'
  | 'collections'
  | 'metaobjects'
  | 'pages'
  | 'products';

/** Only dynamic routes */
export async function loader({context, params, request}: LoaderFunctionArgs) {
  if (!params.type || !params.page) throw notFound('No data found');

  const type = params.type as keyof typeof QUERIES;
  const query = QUERIES[type];

  if (!query) throw notFound('Sitemap route not found');

  const data = await context.storefront.query(query, {
    variables: {page: parseInt(params.page, 10)},
  });

  if (!data) throw notFound('Sitemap not found');

  const {origin} = new URL(request.url);
  const {sitemap} = data;

  switch (type) {
    case 'articles': {
      const article = await createArticleSitemap({context, origin, sitemap});
      return createSitemap(article);
    }

    case 'blogs': {
      const blog = await createBlogSitemap({context, origin, sitemap});
      return createSitemap(blog);
    }

    case 'collections': {
      const collection = await createCollectionSitemap({
        context,
        origin,
        sitemap,
      });
      return createSitemap(collection);
    }

    case 'pages': {
      const page = await createPageSitemap({context, origin, sitemap});
      return createSitemap(page);
    }

    case 'products': {
      const product = await createProductSitemap({context, origin, sitemap});
      return createSitemap(product);
    }
  }
  return;
}

const METAOBJECT_SITEMAP_QUERY = `#graphql
    query SitemapMetaobjects($page: Int!) {
      sitemap(type: METAOBJECT) {
        resources(page: $page) {
          items {
            handle
            updatedAt
            ... on SitemapResourceMetaobject {
              type
            }
          }
        }
      }
    }
` as const;

const QUERIES = {
  articles: ARTICLE_SITEMAP_QUERY,
  blogs: BLOG_SITEMAP_QUERY,
  collections: COLLECTION_SITEMAP_QUERY,
  metaobjects: METAOBJECT_SITEMAP_QUERY,
  pages: PAGE_SITEMAP_QUERY,
  products: PRODUCT_SITEMAP_QUERY,
};
