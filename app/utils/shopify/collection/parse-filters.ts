import type {Swatch} from '@shopify/hydrogen/storefront-api-types';
import type {FilterFragment} from 'types/generated/storefront';
import type {PartialImage} from 'types/shopify';

import {parseGid} from '@shopify/hydrogen';
import qs from 'query-string';

import {
  FILTER_AVAILABILITY_PREFIX,
  FILTER_METAOBJECT_GID,
  FILTER_PRICE_PREFIX,
  FILTER_QUERY_SEPARATOR,
  FILTER_URL_PREFIX,
  METAOBJECT_GID_SEPARATOR,
  PER_PAGE_QUERY_PARAM,
  SEARCH_QUERY_PARAM,
  SORT_QUERY_PARAM,
} from '~/config/constants';
import {array, parseJSON} from '~/utils/helpers';

import {parseMedia} from '../storefront';
import {formatPriceRange, type PriceRangeParsed} from './price';

type FilterParams = {
  filterId: string;
  filterValue: string;
};

type FilterFragmentValues = FilterFragment['values'][number];

interface FilterSwatch extends Omit<Swatch, 'image'> {
  image?: null | PartialImage;
}

export interface ParsedFilterValue
  extends Omit<FilterFragmentValues, 'input' | 'swatch'> {
  input?: unknown;
  path: string;
  selected: boolean;
  swatch?: FilterSwatch | null;
}

export interface ParsedFilterItem extends Omit<FilterFragment, 'values'> {
  values: ParsedFilterValue[];
}

export type ParsedFilters = {
  priceFilter: ParsedFilterItem;
  productFilters: ParsedFilterItem[];
};

export const parseFilters = ({
  originalFilters,
  request,
}: {
  originalFilters?: FilterFragment[];
  request: Request;
}) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  const filterParams = [...searchParams.entries()].reduce(
    (acc: FilterParams[], [key, value]) => {
      if (key.startsWith(FILTER_URL_PREFIX)) {
        if (key.includes(FILTER_PRICE_PREFIX)) {
          const price = {filterId: key, filterValue: value};

          return [...acc, price];
        }

        const filters = String(value)
          .split(FILTER_QUERY_SEPARATOR)
          .filter(Boolean)
          .map((filterValue) => ({filterId: key, filterValue}));

        return [...acc, ...filters];
      }

      return acc;
    },
    [],
  );

  const filters = (originalFilters || []).reduce(
    (acc: ParsedFilters, filter: FilterFragment) => {
      if (filter.id.includes(FILTER_PRICE_PREFIX)) {
        const priceFilter = {
          ...filter,
          values: filter.values.map((value) => {
            const {price} = JSON.parse(`${value?.input}`) as PriceRangeParsed;
            const format = formatPriceRange([price.min, price.max]);

            return {
              ...value,
              input: {price},
              path: createPath(filter.id, format, request),
              selected: isAppliedParams(filterParams, filter.id, format),
              swatch: null,
            };
          }),
        };

        return {...acc, priceFilter};
      }

      if (filter.id.includes(FILTER_AVAILABILITY_PREFIX)) {
        const availabilityFilter = {
          ...filter,
          values: filter.values.map((value) => {
            const {available} = JSON.parse(String(value.input)) as {
              available: boolean;
            };
            const input = Number(available);

            return {
              ...value,
              input,
              path: createPath(filter.id, String(input), request),
              selected: isAppliedParams(filterParams, filter.id, input),
              swatch: null,
            };
          }),
        };

        return {
          ...acc,
          productFilters: [...(acc.productFilters || []), availabilityFilter],
        };
      }

      const productFilters = {
        ...filter,
        values: filter.values
          .map((value) => {
            if (value.id.includes(FILTER_METAOBJECT_GID)) {
              // /collections/blusas-basicas-femininas?filter.p.m.specification.swatch_color=gid://shopify/Metaobject/91445100837
              // filter.p.m.specification.swatch_color=Verde-91444969765
              const image = parseMedia<PartialImage>(value.swatch?.image);
              const input: any = parseJSON(value.input);
              const {id} = parseGid(input.productMetafield.value);

              const filterValue = `${value.label}${METAOBJECT_GID_SEPARATOR}${id}`;
              const swatch = value.swatch ? {...value.swatch, image} : null;

              return {
                ...value,
                path: createPath(filter.id, filterValue, request),
                selected: isAppliedParams(filterParams, filter.id, filterValue),
                swatch,
              };
            }

            return {
              ...value,
              path: createPath(filter.id, value.label, request),
              selected: isAppliedParams(filterParams, filter.id, value.label),
              swatch: null,
            };
          })
          .sort((a, b) =>
            a.selected === b.selected ? 0 : a.selected ? -1 : 1,
          ),
      };

      return {
        ...acc,
        productFilters: [...(acc.productFilters || []), productFilters],
      };
    },
    {} as ParsedFilters,
  );

  return filters;
};

export interface AppliedFilter extends Omit<FilterFragment, 'values'> {
  value: ParsedFilterValue;
}

export const getAppliedFilters = (filters: ParsedFilters) => {
  const {priceFilter, productFilters} = filters;

  const filterApplied = [priceFilter, ...(productFilters || [])].reduce(
    (acc: AppliedFilter[], filter) => {
      const {values, ...restFilter} = filter;

      const applied = values
        .map((value) => value.selected && {...restFilter, value})
        .filter(Boolean);

      return [...acc, ...applied];
    },
    [],
  );

  return filterApplied;
};

export const createClearFiltersUrl = (request: Request) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  const parsed = qs.parse(searchParams.toString(), {arrayFormat: 'comma'});
  const paramsToKeep = {
    [PER_PAGE_QUERY_PARAM]: parsed[PER_PAGE_QUERY_PARAM],
    [SEARCH_QUERY_PARAM]: parsed[SEARCH_QUERY_PARAM],
    [SORT_QUERY_PARAM]: parsed[SORT_QUERY_PARAM],
  };

  return qs.stringifyUrl(
    {query: paramsToKeep, url: url.pathname},
    {arrayFormat: 'comma'},
  );
};

const isAppliedParams = (
  filterParams: FilterParams[],
  id: string,
  label: number | string,
) =>
  filterParams.some(
    (ap) => ap.filterId === id && ap.filterValue === String(label),
  );

const createPath = (
  filterId: string,
  filterValue: string,
  request: Request,
) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const parsed = qs.parse(searchParams.toString(), {arrayFormat: 'comma'});

  // Remove all pagination before filtering
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {cursor, direction, page, ...query} = parsed;
  const values = query[filterId];
  const valuesArr = Array.isArray(values) ? values : [values].filter(Boolean);

  const filteredValues = array.toggle(valuesArr, filterValue);
  const mountedQuery = {...query, [filterId]: filteredValues};

  const path = qs.stringifyUrl(
    {query: mountedQuery, url: url.pathname},
    {arrayFormat: 'comma'},
  );

  return path;
};
