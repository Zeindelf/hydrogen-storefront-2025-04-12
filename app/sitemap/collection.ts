import type {AppLoadContext} from '@shopify/remix-oxygen';
import type {SitemapCollectionsQuery} from 'types/generated/storefront';

import type {SitemapField} from '~/lib/sitemap';

import {SITEMAP_IMAGE_FRAGMENT} from '~/graphql/storefront/fragments';
import {createCollectionsPaths, createCollectionUrl} from '~/utils/shopify';

import {createQuery, getImage, getResource} from './utils';

export const createCollectionSitemap = async ({
  context,
  origin,
  sitemap,
}: {
  context: AppLoadContext;
  origin: string;
  sitemap: SitemapCollectionsQuery['sitemap'];
}) => {
  const collectionsHandle = createQuery(sitemap);
  const {collections} = await context.storefront.query(
    GET_COLLECTIONS_BY_HANDLE,
    {variables: {query: collectionsHandle}},
  );
  const {collectionsPaths} = createCollectionsPaths(context.navigation);
  const collectionResource = getResource(sitemap, collections.nodes);

  return (
    collectionResource
      .map((item): null | SitemapField => {
        const {handle, image, title} = item;
        const images = getImage(image, title, context.shopify);
        const collection = collectionsPaths.find((c) => c.handle === handle);

        if (!collection) return null;

        return {
          changefreq: 'daily',
          lastmod: item.updatedAt,
          loc: createCollectionUrl(collection?.pathname, origin),
          ...(images && {images}),
        };
      })
      .filter(Boolean) || []
  );
};

export const COLLECTION_SITEMAP_QUERY = `#graphql
    query SitemapCollections($page: Int!) {
      sitemap(type: COLLECTION) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
` as const;

const GET_COLLECTIONS_BY_HANDLE = `#graphql
  query GetCollectionsByHandle(
    $query: String
    $first: Int = 250
  ) {
    collections(
      query: $query
      first: $first
    ) {
      nodes {
        title
        handle
        image {
          ...SitemapImage
        }
      }
    }
  }
  ${SITEMAP_IMAGE_FRAGMENT}
` as const;
