import type {ImageObject} from 'schema-dts';

/** @module Global */
export const MAIN_MENU_HANDLE = 'main-menu';
export const FOOTER_MENU_HANDLE = 'footer-menu';
export const IMAGE_ASPECT_RATIO = '4/5'; //1080 / 1350
export const ATTR_LOADING_EAGER = 'eager';
export const DEFAULT_GRID_IMG_LOAD_EAGER_COUNT = 4;
export const DEFAULT_IMAGE_URL =
  'https://cdn.shopify.com/s/files/1/0877/5657/0905/files/blank-square-image.png?v=1720828875';
export const DEFAULT_IMAGE_OBJECT: ImageObject = {
  '@type': 'ImageObject',
  alternateName: 'Default Image Placeholder',
  encodingFormat: 'image',
  url: DEFAULT_IMAGE_URL,
};
export const CUSTOMER_ACCOUNT_SESSION_KEY = 'customerAccount';
export const BUYER_SESSION_KEY = 'buyer';
export const SHOPIFY_CHARS_LIMIT = 65535;

/** @module Paths */
export const PREFIX_PRODUCT_PATH = 'p';
export const SUFFIX_PRODUCT_PATH = '';
export const COLLECTION_PATH = 'c';
export const CART_PATH = 'cart';
export const SEARCH_PATH = 'search';
export const BLOG_PATH = 'blogs';
export const AUTHOR_PATH = 'author';
export const POLICIES_PATH = 'policies';
export const ACCOUNT_PATH = 'account';
export const PAGE_PATH = 'pages';

/** @module GidPrefixes */
export const PRODUCT_GID_PREFIX = 'gid://shopify/Product/';
export const VARIANT_GID_PREFIX = 'gid://shopify/ProductVariant/';
export const CART_GID_PREFIX = 'gid://shopify/Cart/';
export const METAOBJECT_GID_PREFIX = 'gid://shopify/Metaobject/';

/** @module Shelf */
/** Default product image size on shelves */
export const SHELF_IMAGE_SIZE_MOBILE = 230;
export const SHELF_IMAGE_SIZE_DESKTOP = 290;

/** @module Cart */

/** @module Product */
export const PRODUCT_DEFAULT_VARIANT = {
  name: 'Title',
  value: 'Default Title',
};
export const PRODUCT_IMAGE_SIZE_DESKTOP = 780;
export const PRODUCT_IMAGE_SIZE_MOBILE = 540;
export const BUSCACEP_URL =
  'https://buscacepinter.correios.com.br/app/endereco/index.php';

/** @module Collection/Category (Collection|Search|Category) */
export const SEARCH_QUERY_PARAM = 'q';
export const SORT_QUERY_PARAM = 'sort';
export const PAGE_QUERY_PARAM = 'page';
export const PER_PAGE_QUERY_PARAM = 'per-page';
export const GRID_COL_QUERY_PARAM = 'view';
export const ITEMS_PER_PAGE = 12;
export const MAX_ITEMS_PER_PAGE = ITEMS_PER_PAGE * 4;
export const PER_PAGE_LIST = [
  ITEMS_PER_PAGE,
  ITEMS_PER_PAGE * 2,
  ITEMS_PER_PAGE * 3,
  MAX_ITEMS_PER_PAGE,
];

/** @module Search */
/** Enable autocomplete suggestions */
export const SEARCH_SUGGESTIONS = false;
/** Search result max quantity */
export const SEARCH_RESULT_QTY = 5;
// Last searches - { searchTerm: '', timestamp: Date.now() }
export const RECENT_SEARCHES_STORAGE_KEY = 'recent_searches';

/** @module Filters */
export const FILTER_QUERY_SEPARATOR = ',';
export const PRICE_QUERY_SEPARATOR = '-';
export const VARIANT_ID_SEPARATOR = '.';
export const METAFIELD_ID_SEPARATOR = '.';
export const METAOBJECT_GID_SEPARATOR = '.';
export const FILTER_URL_PREFIX = 'filter.';
export const FILTER_AVAILABILITY_PREFIX = 'filter.v.availability';
export const FILTER_PRICE_PREFIX = 'filter.v.price';
export const FILTER_VENDOR_PREFIX = 'filter.p.vendor';
export const FILTER_TAG_PREFIX = 'filter.p.tag';
export const FILTER_PRODUCT_TYPE_PREFIX = 'filter.p.product_type';
export const FILTER_CATEGORY_PREFIX = 'filter.p.t.category';
export const FILTER_VARIANT_OPTION_PREFIX = 'filter.v.option.';
export const FILTER_METAFIELD_PREFIX = 'filter.p.m.';
export const FILTER_METAOBJECT_GID = 'gid-shopify-metaobject';
