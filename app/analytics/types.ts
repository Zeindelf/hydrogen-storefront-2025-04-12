import type {CurrencyCode} from '@shopify/hydrogen/storefront-api-types';

export interface IEvent<Params = any> {
  name: string;
  params: Params;
}

interface ItemId {
  item_id: string;
}

interface ItemName {
  item_name: string;
}

type ItemUniqueIdentifier = ItemId | ItemName;

interface ItemWithoutIdentifier {
  affiliation?: string;
  coupon?: string;
  currency?: CurrencyCode;
  discount?: number;
  index?: number;
  item_brand?: string;
  item_category?: string;
  item_category2?: string;
  item_category3?: string;
  item_category4?: string;
  item_category5?: string;
  item_group_id?: string;
  item_list_id?: string;
  item_list_name?: string;
  item_url?: string;
  item_variant?: string;
  location_id?: string;
  price?: number;
  quantity: number;
}

export type AnalyticsItem = ItemUniqueIdentifier & ItemWithoutIdentifier;

export interface PromotionParams {
  creative_name?: string;
  creative_slot?: string;
  location_id?: string;
  promotion_id?: string;
  promotion_name?: string;
}

export type PromotionItem = AnalyticsItem & PromotionParams;

export type AnalyticsEventName =
  | 'cart_updated'
  | 'cart_viewed'
  | 'collection_viewed'
  | 'page_viewed'
  | 'product_added_to_cart'
  | 'product_removed_from_cart'
  | 'product_viewed'
  | 'search_viewed'
  | `custom_${string}`;

export interface SearchParams {
  search_term: string;
}

export interface SearchEvent {
  name: 'search';
  params: SearchParams;
}

export interface SelectItemParams<T extends AnalyticsItem = AnalyticsItem> {
  item_list_id?: string;
  item_list_name?: string;
  items: T[];
}

/** @docs https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtm#select_item */
export interface SelectItemEvent<T extends AnalyticsItem = AnalyticsItem> {
  name: 'select_item';
  params: SelectItemParams<T>;
}

export interface AddToCartParams<T extends AnalyticsItem = AnalyticsItem> {
  currency?: CurrencyCode;
  items: T[];
  value?: number;
}

/** @docs https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtm#add_to_cart */
export interface AddToCartEvent<T extends AnalyticsItem = AnalyticsItem> {
  name: 'add_to_cart';
  params: AddToCartParams<T>;
}

export interface RemoveFromCartParams<T extends AnalyticsItem = AnalyticsItem> {
  currency?: CurrencyCode;
  items: T[];
  value?: number;
}

/** @docs https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtm#remove_from_cart */
export interface RemoveFromCartEvent<T extends AnalyticsItem = AnalyticsItem> {
  name: 'remove_from_cart';
  params: RemoveFromCartParams<T>;
}

export interface ViewCartParams<T extends AnalyticsItem = AnalyticsItem> {
  currency: CurrencyCode;
  items: T[];
  value: number;
}

/** @docs https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtm#view_cart */
export interface ViewCartEvent<T extends AnalyticsItem = AnalyticsItem> {
  name: 'view_cart';
  params: ViewCartParams<T>;
}

export type AnalyticsEvent =
  | AddToCartEvent
  | RemoveFromCartEvent
  | SearchEvent
  | SelectItemEvent
  | UnknownEvent
  | ViewCartEvent;

export interface UnknownEvent {
  name: string;
  params: any;
}
