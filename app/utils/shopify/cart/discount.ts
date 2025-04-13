import type {
  CartDiscountCode,
  MoneyV2,
} from '@shopify/hydrogen/storefront-api-types';
import type {ShopCart} from 'types/shopify';

export const addDiscountCode = (
  discountCode: string,
  discountCodes: CartDiscountCode[],
) => {
  const applicableDiscountCodes =
    discountCodes
      .filter((discount) => discount.applicable)
      .map((discount) => discount.code.toUpperCase()) || [];

  return [discountCode, ...applicableDiscountCodes];
};

export const removeDiscountCode = (
  discountCode: string,
  discountCodes: CartDiscountCode[],
) => {
  const currentCodes = discountCodes
    .filter(
      (discount) =>
        discount.code.toUpperCase() !== discountCode.toUpperCase() &&
        !!discount.applicable,
    )
    .map((discount) => discount.code.toUpperCase());

  return currentCodes || [];
};

export const getDiscountTotals = (cart: ShopCart) => {
  const totalDiscount = cart?.discountAllocations?.reduce(
    (acc, item) => acc + Number(item.discountedAmount.amount),
    0,
  );

  return {
    amount: String(totalDiscount ?? 0),
    currencyCode: cart.cost?.totalAmount?.currencyCode,
  } as MoneyV2;
};
