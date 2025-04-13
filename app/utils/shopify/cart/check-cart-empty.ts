import type {ShopCart} from 'types/shopify';

import {isEmpty} from 'ramda';

export const checkCartEmpty = (cart: ShopCart) => {
  const isCartEmpty = isEmpty(cart?.lines?.nodes || []);

  return {isCartEmpty};
};
