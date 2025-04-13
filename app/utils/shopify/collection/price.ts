import type {ProductConnection} from '@shopify/hydrogen/storefront-api-types';
import type {PartialDeep} from 'type-fest';

import {flattenConnection} from '@shopify/hydrogen';
import {head} from 'ramda';

import {PRICE_QUERY_SEPARATOR} from '~/config/constants';

export type FormatPriceRange = number[];

export type ParsePriceRange = `${string}-${string}`;

export type PriceRangeParsed = {
  price: {
    max: number;
    min: number;
  };
};

export const formatPriceRange = ([min, max]: FormatPriceRange) =>
  `${min}${PRICE_QUERY_SEPARATOR}${max}`;

export const parsePriceRange = (value: ParsePriceRange) => {
  const splitted = value.split(PRICE_QUERY_SEPARATOR);

  const min = Number(splitted?.[0]);
  const max = Number(splitted?.[1]);

  const price = {max, min};

  return Number.isNaN(min) || Number.isNaN(max) ? null : {price};
};

export const getPriceRange = (
  minVariantPrice?: PartialDeep<ProductConnection, {recurseIntoArrays: true}>,
  maxVariantPrice?: PartialDeep<ProductConnection, {recurseIntoArrays: true}>,
): PriceRangeParsed => {
  const min = head(flattenConnection(minVariantPrice));
  const max = head(flattenConnection(maxVariantPrice));

  const minPrice = Number(min?.priceRange?.minVariantPrice?.amount);
  const maxPrice = Number(max?.priceRange?.maxVariantPrice?.amount);

  const price = {
    max: Math.ceil(maxPrice),
    min: Math.floor(minPrice),
  };

  return {price};
};
