import type {
  CartLineUpdatePayload,
  CartUpdatePayload,
  CartViewPayload,
  CollectionViewPayload,
  PageViewPayload,
  ProductViewPayload,
} from '@shopify/hydrogen';

import {useAnalytics} from '@shopify/hydrogen';
import * as React from 'react';

import {useRootLoaderData} from '~/root';
import {logger} from '~/utils/helpers';

import {sendGAEvent} from './google';

/** https://weaverse.io/docs/deployment/hydrogen-domain-checkout-and-analytics-setup */
export const CustomAnalytics = () => {
  const {shopify} = useRootLoaderData();
  const {canTrack, register, subscribe} = useAnalytics();
  // Register this analytics integration - this will prevent any analytics events
  // from being sent until this integration is ready
  const {ready} = register('Google Tag Manager');

  const DEFAULT_CURRENCY = shopify.currencyCode;

  React.useEffect(() => {
    setTimeout(() => {
      const isTrackingAllowed = canTrack();
      logger.info('GoogleTagManager - isTrackingAllowed', isTrackingAllowed);
    }, 1000);

    subscribe('page_viewed', (data: PageViewPayload) => {
      logger.info('GoogleTagManager - Page viewed:', data);

      sendGAEvent({
        name: 'page_view',
        params: {
          page_location: data.url,
          page_path: new URL(data.url).pathname,
          page_title: document.title,
        },
      });
    });

    subscribe('product_viewed', (data: ProductViewPayload) => {
      logger.info('GoogleTagManager - Product viewed:', data);

      sendGAEvent({
        name: 'view_item',
        params: {
          currency: data.shop?.currency || DEFAULT_CURRENCY,
          items: [
            {
              item_brand: data.products[0]?.vendor,
              item_id: data.products[0]?.id,
              item_name: data.products[0]?.title,
              item_variant: data.products[0]?.variantTitle,
              price: Number(data.products[0]?.price),
            },
          ],
          value: Number(data.products[0]?.price),
        },
      });
    });

    subscribe('collection_viewed', (data: CollectionViewPayload) => {
      logger.info('GoogleTagManager - Collection viewed:', data);

      sendGAEvent({
        name: 'viewed-collection',
        params: {
          id: data.collection.id,
          path: data.collection.handle,
        },
      });
    });

    subscribe('search_viewed', (data) => {
      logger.info('GoogleTagManager - Search viewed:', data);

      sendGAEvent({
        name: 'search',
        params: {
          search_term: data.searchTerm,
        },
      });
    });

    subscribe('cart_viewed', (data: CartViewPayload) => {
      logger.info('GoogleTagManager - Cart viewed:', data);

      sendGAEvent({name: 'view_cart', params: {}});
    });

    subscribe('product_added_to_cart', (data: CartLineUpdatePayload) => {
      logger.info('GoogleTagManager - Added to Cart:', data);

      sendGAEvent({name: 'add_to_cart', params: {}});
    });

    subscribe('product_removed_from_cart', (data: CartLineUpdatePayload) => {
      logger.info('GoogleTagManager - Removed to Cart:', data);

      sendGAEvent({name: 'remove_from_cart', params: {}});
    });

    subscribe('cart_updated', (data: CartUpdatePayload) => {
      logger.info('GoogleTagManager - Cart updated:', data);

      sendGAEvent({name: 'update-cart', params: {}});
    });

    /** Custom events */
    subscribe('custom_minicart_viewed', (data) => {
      logger.info('GoogleTagManager - Custom minicart opened:', data);

      sendGAEvent({name: 'view_cart', params: {}});
    });

    subscribe('custom_view_item_list', (data) => {
      logger.info('GoogleTagManager - Custom view item list', data);

      sendGAEvent({name: 'view_item', params: {}});
    });

    // Mark this analytics integration as ready as soon as it's done setting up
    ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe, register, ready]);

  return null;
};
