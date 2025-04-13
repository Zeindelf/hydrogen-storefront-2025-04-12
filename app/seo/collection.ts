import type {SeoConfig} from '@shopify/hydrogen';
import type {CollectionPage, ListItem, WithContext} from 'schema-dts';
import type {
  CollectionQuery,
  ProductItemFragment,
} from 'types/generated/storefront';
import type {Shopify} from 'types/shopify';

import {flattenConnection} from '@shopify/hydrogen';

import type {CollectionItems} from '~/utils/shopify';

import {truncate} from '~/utils/helpers';
import {createCollectionUrl} from '~/utils/shopify';

import type {BreadcrumbItem} from './breadcrumb';

import {createMedia} from './media';
import {createRobots} from './robots';
import {createProductItemSchema} from './shelf';

interface CollectionMetadataArgs {
  collection: CollectionQuery['collection'];
  request: Request;
  shopify: Shopify;
}

const createCollectionMetadata = (args: CollectionMetadataArgs) => {
  const {collection, request, shopify} = args;
  const title = collection?.collectionSeo?.title || collection?.title;
  const description =
    truncate(collection?.collectionSeo.description, 'description') ||
    truncate(collection?.description, 'description') ||
    `Produtos da coleção ${collection?.title}`;

  const {robots} = createRobots();
  const {media} = createMedia(
    collection?.image || shopify.brand?.coverImage?.image,
  );

  const collectionMetadata: SeoConfig = {
    description,
    media,
    robots,
    title,
    url: request.url,
  };

  return {collectionMetadata};
};

interface CollectionBreadcrumbArgs {
  collectionsPaths: CollectionItems[];
  handles: string[];
}

const createCollectionBreadcrumb = (args: CollectionBreadcrumbArgs) => {
  const {collectionsPaths, handles} = args;
  const finalCollectionPaths = collectionsPaths.filter((path) =>
    handles.includes(path.handle),
  );

  const listItems: BreadcrumbItem[] = finalCollectionPaths.map(
    (collection) => ({
      ariaLabel: `Ir até a coleção: ${collection.title}`,
      pathname: createCollectionUrl(collection.pathname),
      title: collection.title,
    }),
  );

  return {listItems};
};

interface CreateCollectionSchemaArgs {
  collection: CollectionQuery['collection'];
  products: ProductItemFragment[];
  request: Request;
}

const createCollectionSchema = (args: CreateCollectionSchemaArgs) => {
  const {collection, products, request} = args;
  const {origin} = new URL(request.url);

  // const itemListElement: CollectionPage['mainEntity'] = products.map(
  //   (product, index) => ({
  //     '@type': 'ListItem',
  //     position: index + 1,
  //     url: `${createProductUrl(product.handle, origin)}`,
  //   }),
  // );

  const itemListElement: ListItem[] = products.map((product, idx) => {
    const {productItemSchema} = createProductItemSchema({origin, product});

    return {
      '@type': 'ListItem',
      item: productItemSchema,
      position: idx + 1,
    };
  });

  const collectionSchema: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    description: truncate(
      collection?.collectionSeo?.description ?? collection?.description ?? '',
    ),
    image: collection?.image?.url || '',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement,
    },
    name: collection?.collectionSeo?.title ?? collection?.title ?? '',
    url: request.url,
  };

  return {collectionSchema};
};

interface CollectionSeoArgs
  extends CollectionBreadcrumbArgs,
    CollectionMetadataArgs {}

export const collectionSeo = (args: CollectionSeoArgs) => {
  const {collection, collectionsPaths, handles, request, shopify} = args;
  const {collectionMetadata} = createCollectionMetadata({
    collection,
    request,
    shopify,
  });
  const {listItems} = createCollectionBreadcrumb({collectionsPaths, handles});
  const products = flattenConnection(collection?.products);

  const {collectionSchema} = createCollectionSchema({
    collection,
    products,
    request,
  });

  const seo: SeoConfig = {...collectionMetadata};
  const jsonLd = [collectionSchema];

  return {jsonLd, listItems, seo};
};
