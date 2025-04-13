import type {AppLoadContext} from '@shopify/remix-oxygen';
import type {SitemapProductsQuery} from 'types/generated/storefront';

import type {SitemapField} from '~/lib/sitemap';

import {SITEMAP_IMAGE_FRAGMENT} from '~/graphql/storefront/fragments';
import {createProductUrl} from '~/utils/shopify';

import {createQuery, getImage, getResource} from './utils';

export const createProductSitemap = async ({
  context,
  origin,
  sitemap,
}: {
  context: AppLoadContext;
  origin: string;
  sitemap: SitemapProductsQuery['sitemap'];
}) => {
  const productsQuery = createQuery(sitemap);
  const {products} = await context.storefront.query(
    SEARCH_PRODUCTS_BY_HANDLE_QUERY,
    {variables: {query: productsQuery}},
  );

  const resources = getResource(sitemap, products.nodes);

  return resources.map((item): SitemapField => {
    const {image, title} = item;
    const images = getImage(image, title, context.shopify);

    return {
      changefreq: 'daily',
      lastmod: item.updatedAt,
      loc: createProductUrl(item.handle, origin),
      ...(images && {images}),
    };
  });
};

export const PRODUCT_SITEMAP_QUERY = `#graphql
    query SitemapProducts($page: Int!) {
      sitemap(type: PRODUCT) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
` as const;

const SEARCH_PRODUCTS_BY_HANDLE_QUERY = `#graphql
  query SearchProductsByHandle(
    $query: String!
    $first: Int = 250
  ) {
    products(
      query: $query
      first: $first
    ) {
      nodes {
        handle
        title
        image: featuredImage {
          ...SitemapImage
        }
      }
    }
  }
  ${SITEMAP_IMAGE_FRAGMENT}
` as const;
