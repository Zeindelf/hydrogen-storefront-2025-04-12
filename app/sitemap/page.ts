import type {AppLoadContext} from '@shopify/remix-oxygen';
import type {SitemapPagesQuery} from 'types/generated/storefront';

import type {SitemapField} from '~/lib/sitemap';

import {createPageUrl} from '~/utils/shopify';

import {createQuery, getImage, getResource} from './utils';

export const createPageSitemap = async ({
  context,
  origin,
  sitemap,
}: {
  context: AppLoadContext;
  origin: string;
  sitemap: SitemapPagesQuery['sitemap'];
}) => {
  const pagesQuery = createQuery(sitemap);
  const {pages} = await context.storefront.query(SEARCH_PAGE_BY_HANDLE_QUERY, {
    variables: {query: pagesQuery},
  });

  const resources = getResource(sitemap, pages.nodes);

  return resources.map((item): SitemapField => {
    const {image, title} = item;
    const images = getImage(image, title, context.shopify);

    return {
      changefreq: 'daily',
      lastmod: item.updatedAt,
      loc: createPageUrl(item.handle, origin),
      ...(images && {images}),
    };
  });
};

export const PAGE_SITEMAP_QUERY = `#graphql
    query SitemapPages($page: Int!) {
      sitemap(type: PAGE) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
` as const;

const SEARCH_PAGE_BY_HANDLE_QUERY = `#graphql
  query SearchPageByHandle($query: String) {
    pages(
      query: $query
      first: 250
    ) {
      nodes {
        handle
        title
      }
    }
  }
` as const;
