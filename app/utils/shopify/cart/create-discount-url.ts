import {createCartUrl} from '../storefront';

// discount-url: /discount/FREESHIPPING?redirect=/products
export const createDiscountUrl = (discountCode: string, origin?: string) => {
  const url = discountCode.trim();

  return `${createCartUrl('discount', origin)}/${url}`;
};
