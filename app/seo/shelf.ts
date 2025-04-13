import type {ItemList, ListItem, Offer, Product, WithContext} from 'schema-dts';
import type {ProductItemFragment} from 'types/generated/storefront';

import {createProductUrl} from '~/utils/shopify';

export interface CreateProductItemSchema {
  origin: string;
  product: ProductItemFragment;
}

export const createProductItemSchema = ({
  origin,
  product,
}: CreateProductItemSchema) => {
  const variants = product.adjacentVariants;

  const offers: Offer[] = (variants || []).map((variant) => {
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
    };
  });

  const productItemSchema: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    // aggregateRating: {
    //   '@type': 'AggregateRating',
    //   ratingCount: 353,
    //   ratingValue: 4.8,
    // },
    brand: {
      '@type': 'Brand',
      name: product?.vendor,
    },
    image: '',
    name: '',
    offers,
    url: createProductUrl(product.handle, origin),
  };

  return {productItemSchema};
};

export interface CreateShelfSchema {
  origin: string;
  products: ProductItemFragment[];
}

export const createShelfSchema = ({origin, products}: CreateShelfSchema) => {
  const itemListElement: ListItem[] = products.map((product, idx) => {
    const {productItemSchema} = createProductItemSchema({origin, product});

    return {
      '@type': 'ListItem',
      item: productItemSchema,
      position: idx + 1,
    };
  });

  const shelfSchema: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement,
  };

  return {shelfSchema};
};
