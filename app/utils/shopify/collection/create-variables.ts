import {getPaginationVariables} from '@shopify/hydrogen';

import {
  ITEMS_PER_PAGE,
  MAX_ITEMS_PER_PAGE,
  PER_PAGE_QUERY_PARAM,
  SORT_QUERY_PARAM,
} from '~/config/constants';

import type {SortParams} from './sort';

import {createFilters} from './create-filters';
import {collectionSort, searchSort} from './sort';

const createVariables = (request: Request, searchParams: URLSearchParams) => {
  const perPage = Number(
    searchParams.get(PER_PAGE_QUERY_PARAM) || ITEMS_PER_PAGE,
  );
  const filters = createFilters(searchParams);
  const noPriceFilters = filters.filter((value) => !value.price);
  const pageBy = perPage > MAX_ITEMS_PER_PAGE ? MAX_ITEMS_PER_PAGE : perPage;
  const paginationVariables = getPaginationVariables(request, {pageBy});

  return {
    filters,
    noPriceFilters,
    ...paginationVariables,
  };
};

export const createCollectionVariables = (
  request: Request,
  searchParams: URLSearchParams,
) => {
  const variables = createVariables(request, searchParams);
  const sort = collectionSort(searchParams.get(SORT_QUERY_PARAM) as SortParams);

  return {
    ...variables,
    ...sort,
  };
};

export const createSearchVariables = (
  request: Request,
  searchParams: URLSearchParams,
) => {
  const variables = createVariables(request, searchParams);
  const sort = searchSort(searchParams.get(SORT_QUERY_PARAM) as SortParams);

  return {
    ...variables,
    ...sort,
  };
};
