import type {
  Sitemap,
  SitemapImage,
  SitemapResource,
} from '@shopify/hydrogen/storefront-api-types';
import type {PartialDeep} from 'type-fest';
import type {Shopify} from 'types/shopify';

import type {SitemapField} from '~/lib/sitemap';

type PartialSitemap = PartialDeep<Sitemap, {recurseIntoArrays: true}>;
type PartialResources = PartialDeep<SitemapResource, {recurseIntoArrays: true}>;
type PartialSitemapImage = PartialDeep<SitemapImage, {recurseIntoArrays: true}>;

export function getResource<T extends {handle: string}>(
  sitemap: PartialSitemap,
  nodes: T[],
) {
  return sitemap?.resources?.items
    ?.map((item) => ({
      ...item,
      ...(nodes.find((node) => node.handle === item?.handle) || null),
    }))
    .filter(Boolean) as PartialResources[];
}

export const getImage = (
  image?: null | PartialSitemapImage,
  title?: null | string,
  shopify?: Shopify,
) => {
  return image
    ? ([
        {
          caption: `${image?.alt || title} - ${shopify?.name}`,
          loc: image?.filepath,
          title,
        },
      ] as SitemapField['images'])
    : null;
};

export const createQuery = (sitemap: PartialSitemap) =>
  sitemap?.resources?.items?.map((i) => i?.handle).join(' OR ') || '';
