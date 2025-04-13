import type {Get} from 'type-fest';
import type {CollectionQuery, SearchQuery} from 'types/generated/storefront';

import type {AppliedFilter, ParsedFilters} from './parse-filters';
import type {PriceRangeParsed} from './price';

import {
  createClearFiltersUrl,
  getAppliedFilters,
  parseFilters,
} from './parse-filters';
import {getPriceRange} from './price';

export interface GetFiltersArgs {
  maxPrice:
    | Get<CollectionQuery, 'maxPrice.products'>
    | Get<SearchQuery, 'maxPrice'>;
  minPrice:
    | Get<CollectionQuery, 'minPrice.products'>
    | Get<SearchQuery, 'minPrice'>;
  products:
    | Get<CollectionQuery, 'collection.products'>
    | Get<SearchQuery, 'search'>;
  request: Request;
}

export interface GetFiltersResponse {
  appliedFilters: AppliedFilter[];
  clearFiltersUrl: string;
  parsedFilters: ParsedFilters;
  priceRange: PriceRangeParsed;
}

export const getFilters = ({
  maxPrice,
  minPrice,
  products,
  request,
}: GetFiltersArgs) => {
  const priceRange = getPriceRange(minPrice, maxPrice);
  const clearFiltersUrl = createClearFiltersUrl(request);
  const parsedFilters = parseFilters({
    originalFilters: products?.filters,
    request,
  });
  const appliedFilters = getAppliedFilters(parsedFilters);

  const filters = {
    appliedFilters,
    clearFiltersUrl,
    parsedFilters,
    priceRange,
  };

  return {filters};
};
