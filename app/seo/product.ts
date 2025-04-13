import type {Offer, Product, WithContext} from 'schema-dts';
import type {
  ProductFragment,
  ProductQuery,
  ProductVariantFragment,
} from 'types/generated/storefront';

import {parseGid, type SeoConfig} from '@shopify/hydrogen';
import {head} from 'ramda';

import type {EnhancedMenu} from '~/utils/shopify';

import {DEFAULT_IMAGE_OBJECT} from '~/config/constants';
import {truncate} from '~/utils/helpers';
import {
  createCheckoutUrl,
  createCollectionsPaths,
  createCollectionUrl,
  createProductUrl,
} from '~/utils/shopify';

import type {BreadcrumbItem} from './breadcrumb';

import {createMedia} from './media';
import {createRobots} from './robots';

interface ProductMetadataArgs {
  product: ProductQuery['product'];
  request: Request;
}

const createProductMetadata = ({product, request}: ProductMetadataArgs) => {
  const title = product!.productSeo?.title || product!.title;
  const description = truncate(
    product?.productSeo?.description ?? product?.description ?? '',
  );

  const {robots} = createRobots();
  const {media} = createMedia(product?.selectedOrFirstAvailableVariant?.image);

  const productMetadata: SeoConfig = {
    description,
    media,
    robots,
    title,
    url: request.url,
  };

  return {productMetadata};
};

interface ProductSchemaArgs extends ProductMetadataArgs {
  listItems: BreadcrumbItem[];
}

const createProductSchema = ({
  listItems,
  product,
  request,
}: ProductSchemaArgs) => {
  const {origin} = new URL(request.url);
  const description = truncate(
    product?.productSeo?.description ?? product?.description ?? '',
  );
  const variants = product?.adjacentVariants;
  const selectedVariant =
    product?.selectedOrFirstAvailableVariant ?? head(variants || []);

  const category = listItems
    .filter((item) => item.title !== product?.title)
    .map((item) => item.title)
    .join('/');

  const offers: Offer[] = (variants || []).map(
    (variant: ProductVariantFragment) => {
      const {id} = parseGid(variant.id);
      const searchParams = new URLSearchParams();
      variant.selectedOptions.forEach((option) =>
        searchParams.set(option.name, option.value),
      );

      const compareAtPrice: any = variant.compareAtPrice?.amount && {
        '@type': 'UnitPriceSpecification',
        price: parseFloat(variant.compareAtPrice.amount),
        priceType: 'https://schema.org/ListPrice',
      };

      return {
        '@type': 'Offer',
        availability: variant.availableForSale
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
        checkoutPageURLTemplate: createCheckoutUrl([{variantId: id}], origin),
        inventoryLevel: {
          '@type': 'QuantitativeValue',
          value: variant.quantityAvailable ?? 0,
        },
        itemCondition: 'NewCondition',
        itemOffered: [
          {
            '@type': 'IndividualProduct',
            image: variant.image
              ? [
                  {
                    '@type': 'ImageObject',
                    alternateName:
                      variant.image.altText ||
                      `${product?.title} - ${variant.title}`,
                    height: String(variant.image.height),
                    url: variant.image.url,
                    width: String(variant.image.width),
                  },
                ]
              : [],
            url: `${request.url}?${searchParams.toString()}`,
          },
        ],
        // [WARNING]: A propriedade lowPrice/highPrice não é reconhecida pelo esquema (por exemplo, schema.org) de um objeto do tipo Offer
        // lowPrice: parseFloat(product?.priceRange.minVariantPrice.amount),
        // highPrice: parseFloat(product?.priceRange.maxVariantPrice.amount),
        price: parseFloat(variant.price.amount),
        priceCurrency: variant.price.currencyCode,
        priceSpecification: [
          {
            '@type': 'UnitPriceSpecification',
            price: parseFloat(variant.price.amount),
            priceType: 'https://schema.org/SalePrice',
          },
          compareAtPrice,
        ],
        sku: variant?.sku ?? '',
        url: `${request.url}?${searchParams.toString()}`,
      };
    },
  );

  // const additionalProperty: Product['additionalProperty'] = [
  //   {
  //     '@type': 'PropertyValue',
  //     name: 'Tamanho',
  //     value: 'P',
  //     valueReference: 'Specification',
  //   },
  //   {
  //     '@type': 'PropertyValue',
  //     name: 'Cor',
  //     value: 'Rosa',
  //     valueReference: 'Specification',
  //   },
  // ];

  const productSchema: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    // additionalProperty,
    audience: {
      '@type': 'PeopleAudience',
      suggestedGender: '',
    },
    brand: {
      '@type': 'Brand',
      name: product?.vendor,
    },
    category,
    description,
    gtin: selectedVariant?.barcode ?? undefined,
    image: product?.images.nodes?.map((img) => ({
      '@type': 'ImageObject',
      alternateName: img?.altText ?? '',
      encodingFormat: 'image',
      url: img?.url,
    })) ?? [DEFAULT_IMAGE_OBJECT],
    name: product?.title,
    offers: {
      '@type': 'AggregateOffer',
      highPrice: product?.compareAtPriceRange?.maxVariantPrice.amount,
      lowPrice: product?.priceRange?.minVariantPrice.amount,
      offerCount: offers.length,
      offers,
      priceCurrency: product?.priceRange.minVariantPrice.currencyCode,
    },
    productID: selectedVariant?.id,
    releaseDate: product?.createdAt,
    sku: selectedVariant?.sku ?? '',
    url: request.url,
  };

  return {productSchema};
};

interface ProductBreadcrumbArgs extends ProductMetadataArgs {
  navigation: EnhancedMenu;
}

const createProductBreadcrumb = (args: ProductBreadcrumbArgs) => {
  const {navigation, product} = args;

  // !TODO Maybe refactor all these methods
  const {collectionsPaths} = createCollectionsPaths(navigation);
  const productCollections = product?.collections.nodes.map(
    (collection) => collection.handle,
  );

  const filteredCollections = collectionsPaths.filter((path) =>
    productCollections?.includes(path.handle),
  );

  const collectionSortedDesc = filteredCollections.sort(
    (a, b) => b.parts.length - a.parts.length,
  );

  const maxCollectionLength = head(collectionSortedDesc);
  const maxCollectionParts = maxCollectionLength?.parts;

  const finalCollectionPaths = collectionsPaths.filter((path) =>
    maxCollectionParts?.includes(path.handle),
  );

  const listItems: BreadcrumbItem[] = finalCollectionPaths
    .map((item) => ({
      ariaLabel: `Ir até o produto: ${item.title}`,
      pathname: createCollectionUrl(item.pathname),
      title: item.title,
    }))
    .concat({
      ariaLabel: `Produto ${product?.title}`,
      pathname: createProductUrl(product?.handle),
      title: product?.title || '',
    });

  return {listItems};
};

interface ProductSeoArgs extends ProductMetadataArgs {
  navigation: EnhancedMenu;
}

export const productSeo = ({navigation, product, request}: ProductSeoArgs) => {
  const {listItems} = createProductBreadcrumb({navigation, product, request});
  const {productMetadata} = createProductMetadata({product, request});

  const {productSchema} = createProductSchema({listItems, product, request});

  const seo: SeoConfig = {
    ...productMetadata,
  };
  const jsonLd = [productSchema];

  return {jsonLd, listItems, seo};
};

/** Refer: https://developers.facebook.com/docs/marketing-api/catalog/reference */
export const createOgContent = (product?: ProductFragment) => {
  if (!product) return [];

  const variant = product.selectedOrFirstAvailableVariant;

  // Add extra OG Info
  const ogContent = [
    {content: 'product', property: 'og:type'},
    {
      content: variant?.availableForSale ? 'in stock' : 'out of stock',
      property: 'og:availability',
    },
    {content: variant?.price.amount, property: 'product:price:amount'},
    {content: variant?.price.currencyCode, property: 'product:price:currency'},
  ];

  return ogContent;
};
