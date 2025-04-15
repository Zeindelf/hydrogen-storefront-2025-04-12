import type {ProductItemFragment} from 'types/generated/storefront';

import * as React from 'react';

import type {LinkProps} from '~/components/ui/link';

import {sendGTMEvent} from '~/analytics/google';
import {createProductUrl} from '~/utils/shopify';

export type ProductLinkOptions = {
  index: number;
  product?: ProductItemFragment;
  selectedOffer?: number;
};

export const useProductLink = ({
  index,
  product,
  selectedOffer: _,
}: ProductLinkOptions): Omit<LinkProps, 'children'> => {
  const selectedVariant = product?.selectedOrFirstAvailableVariant;

  const onClick = React.useCallback(() => {
    sendGTMEvent({
      name: 'select_item',
      params: {
        items: [
          {
            currency: selectedVariant?.price.currencyCode,
            discount:
              Number(selectedVariant?.compareAtPrice?.amount || 0) -
              Number(selectedVariant?.price?.amount || 0),
            index,
            item_brand: product?.vendor,
            item_id: product?.id,
            item_name: product?.title,
            item_variant: selectedVariant?.id,
            item_variant_name: selectedVariant?.title,
            price: selectedVariant?.price.amount,
            product_reference_id: product?.id,
          },
        ],
      },
    });

    sendGTMEvent({
      name: 'search_select_item',
      params: {
        items: [
          {
            index,
            item_id: product?.id,
            item_variant: selectedVariant?.id,
          },
        ],
        url: window.location.href,
      },
    });
  }, [
    index,
    product?.id,
    product?.title,
    product?.vendor,
    selectedVariant?.compareAtPrice?.amount,
    selectedVariant?.id,
    selectedVariant?.price.amount,
    selectedVariant?.price.currencyCode,
    selectedVariant?.title,
  ]);

  return {
    ariaLabel: `Ir até o produto ${product?.title}`,
    onClick,
    prefetch: 'intent',
    title: product?.title,
    to: createProductUrl(product?.handle),
  };
};
