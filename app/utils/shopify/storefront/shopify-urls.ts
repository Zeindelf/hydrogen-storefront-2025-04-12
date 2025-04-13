import type {AccountPath, CartPath, PoliciesPath} from 'types/shopify';

import {
  ACCOUNT_PATH,
  BLOG_PATH,
  CART_PATH,
  COLLECTION_PATH,
  PAGE_PATH,
  POLICIES_PATH,
  PREFIX_PRODUCT_PATH,
  SEARCH_PATH,
  SEARCH_QUERY_PARAM,
  SUFFIX_PRODUCT_PATH,
} from '~/config/constants';
import {isSlug, normalizeSlashes} from '~/utils/helpers';

export const clearCollectionPath = (pathname: string) =>
  pathname
    .split('/')
    .filter((v) => v !== COLLECTION_PATH)
    .filter(Boolean)
    .join('/');

export const createCollectionUrl = (pathname?: string, baseUrl = '') => {
  if (!pathname) {
    throw new Error('missing param: pathname');
  }

  const path = clearCollectionPath(pathname);

  return normalizeSlashes(`${baseUrl}/${COLLECTION_PATH}/${path}`);
};

export const createProductUrl = (handle?: string, baseUrl = '') => {
  if (!handle) {
    throw new Error('missing param: handle');
  }

  if (!isSlug(handle)) {
    throw new Error('please, provide a valid handle');
  }

  return normalizeSlashes(
    `${baseUrl}/${PREFIX_PRODUCT_PATH}/${handle}/${SUFFIX_PRODUCT_PATH}`,
  );
};

export const createCartUrl = (type?: CartPath, baseUrl = '') => {
  if (type) {
    return normalizeSlashes(`${baseUrl}/${CART_PATH}/${type}`);
  }

  return normalizeSlashes(`${baseUrl}/${CART_PATH}`);
};

export const createSearchUrl = (searchTerm?: string, baseUrl = '') => {
  if (searchTerm) {
    const searchParams = new URLSearchParams();
    searchParams.set(SEARCH_QUERY_PARAM, searchTerm);

    return normalizeSlashes(
      `${baseUrl}/${SEARCH_PATH}?${searchParams.toString()}`,
    );
  }

  return normalizeSlashes(`${baseUrl}/${SEARCH_PATH}`);
};

export const createBlogUrl = (
  blogHandle?: string,
  articleHandle?: string,
  baseUrl = '',
) => {
  if (!blogHandle && articleHandle) {
    throw new Error(
      `You cannot provide a 'articleHandle' without a 'blogHandle'`,
    );
  }

  if (blogHandle && articleHandle) {
    return normalizeSlashes(
      `${baseUrl}/${BLOG_PATH}/${blogHandle}/${articleHandle}`,
    );
  }

  if (blogHandle) {
    return normalizeSlashes(`${baseUrl}/${BLOG_PATH}/${blogHandle}`);
  }

  return normalizeSlashes(`${baseUrl}/${BLOG_PATH}`);
};

export const createPoliciesUrl = (type?: PoliciesPath, baseUrl = '') => {
  if (type) {
    return normalizeSlashes(`${baseUrl}/${POLICIES_PATH}/${type}`);
  }

  return normalizeSlashes(`${baseUrl}/${POLICIES_PATH}`);
};

export const createAccountUrl = (type?: AccountPath, baseUrl = '') => {
  if (type) {
    return normalizeSlashes(`${baseUrl}/${ACCOUNT_PATH}/${type}`);
  }

  return normalizeSlashes(`${baseUrl}/${ACCOUNT_PATH}`);
};

export const createPageUrl = (pathname?: string, baseUrl = '') => {
  if (pathname) {
    return normalizeSlashes(`${baseUrl}/${PAGE_PATH}/${pathname}`);
  }

  return normalizeSlashes(`${baseUrl}/${PAGE_PATH}`);
};
