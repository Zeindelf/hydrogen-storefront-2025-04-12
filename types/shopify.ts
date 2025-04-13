import type {OptimisticCart, OptimisticCartLine} from '@shopify/hydrogen';
import type {
  Image,
  MoneyV2,
  ProductOption,
  ProductOptionValue,
  ProductVariant,
} from '@shopify/hydrogen/storefront-api-types';
import type {AppLoadContext} from '@shopify/remix-oxygen';
import type {PartialDeep} from 'type-fest';

import type {CartApiQueryFragment} from './generated/storefront';

export type Shopify = AppLoadContext['shopify'];

export type ShopLayout = 'cart' | 'minicart' | 'product' | 'shelf';

export type ShopCart = OptimisticCart<CartApiQueryFragment | null>;

export type ShopCartLine = OptimisticCartLine<CartApiQueryFragment>;

/** https://help.shopify.com/en/manual/customers/customer-accounts */
export type AccountPath =
  | 'addresses'
  | 'login'
  | 'logout'
  | 'orders'
  | 'profile'
  | 'wishlist';

/** https://help.shopify.com/en/manual/checkout-settings/refund-privacy-tos */
export type PoliciesPath =
  | 'privacy-policy'
  | 'refund-policy'
  | 'shipping-policy'
  | 'subscription-policy'
  | 'terms-of-service';

export type CartPath = 'discount' | 'gift' | 'shared';

export type PartialImage = PartialDeep<Image, {recurseIntoArrays: true}>;
export type PartialProductVariant = PartialDeep<
  ProductVariant,
  {recurseIntoArrays: true}
>;
export type PartialProductOptionValues = PartialDeep<
  ProductOptionValue,
  {recurseIntoArrays: true}
>;
export type PartialProductOption = PartialDeep<
  {
    optionValues: Array<PartialProductOptionValues>;
  } & Omit<ProductOption, 'optionValues'>,
  {recurseIntoArrays: true}
>;

export type PartialPrice = null | PartialDeep<
  MoneyV2,
  {recurseIntoArrays: true}
>;
