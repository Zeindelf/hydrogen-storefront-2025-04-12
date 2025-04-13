import type {ProductFilter} from '@shopify/hydrogen/storefront-api-types';

import {isNil} from 'ramda';

import {
  FILTER_AVAILABILITY_PREFIX,
  FILTER_CATEGORY_PREFIX,
  FILTER_METAFIELD_PREFIX,
  FILTER_PRICE_PREFIX,
  FILTER_PRODUCT_TYPE_PREFIX,
  FILTER_QUERY_SEPARATOR,
  FILTER_TAG_PREFIX,
  FILTER_URL_PREFIX,
  FILTER_VARIANT_OPTION_PREFIX,
  FILTER_VENDOR_PREFIX,
  METAFIELD_ID_SEPARATOR,
  METAOBJECT_GID_PREFIX,
  METAOBJECT_GID_SEPARATOR,
  VARIANT_ID_SEPARATOR,
} from '~/config/constants';

import type {ParsePriceRange} from './price';

import {parsePriceRange} from './price';

type CreateFieldFilters = {
  fieldId: string;
  fieldValue: string | string[] | undefined;
};

const getFilterValues = (value: string | string[]) =>
  (Array.isArray(value)
    ? value.map((x) => x.split(FILTER_QUERY_SEPARATOR))
    : value?.split(FILTER_QUERY_SEPARATOR)
  )?.flat() || [];

const createMetafieldFilters = ({fieldId, fieldValue}: CreateFieldFilters) => {
  if (!fieldValue) return false;

  const fieldValues = getFilterValues(fieldValue);
  const keys = fieldId.split(METAFIELD_ID_SEPARATOR);

  if (keys.length < 5) return false;

  const [, , , namespace, key] = keys;

  return fieldValues.map((fieldValue) => {
    const [splitted, id] = fieldValue.split(METAOBJECT_GID_SEPARATOR);
    const value = id ? METAOBJECT_GID_PREFIX + id : splitted;

    return {
      productMetafield: {key, namespace, value},
    };
  });
};

const createVariantFilters = ({fieldId, fieldValue}: CreateFieldFilters) => {
  if (!fieldValue) return null;

  const fieldValues = getFilterValues(fieldValue);
  const variantKeys = fieldId.split(VARIANT_ID_SEPARATOR);

  if (variantKeys.length < 4) return false;

  const [, , , name] = variantKeys;

  return fieldValues.map((value) => ({
    variantOption: {name, value},
  }));
};

export const createFilters = (searchParams: URLSearchParams) => {
  const filters = [...searchParams.entries()].reduce(
    (acc: any, [key, value]) => {
      if (key.startsWith(FILTER_URL_PREFIX)) {
        if (key.includes(FILTER_PRICE_PREFIX)) {
          const priceRange = parsePriceRange(value as ParsePriceRange);
          return isNil(priceRange) ? acc : [...acc, {...priceRange}];
        }

        if (key.includes(FILTER_METAFIELD_PREFIX)) {
          const metafield = createMetafieldFilters({
            fieldId: key,
            fieldValue: value,
          });

          if (!metafield) return acc;
          return [...acc, ...metafield];
        }

        if (key.includes(FILTER_VARIANT_OPTION_PREFIX)) {
          const variant = createVariantFilters({
            fieldId: key,
            fieldValue: value,
          });

          if (!variant) return acc;
          return [...acc, ...variant];
        }

        if (key.includes(FILTER_AVAILABILITY_PREFIX)) {
          const fieldValues = getFilterValues(value);
          const availability = fieldValues.map((value) => ({
            available: Boolean(Number(value)),
          }));

          if (!availability) return acc;
          return [...acc, ...availability];
        }

        if (key.includes(FILTER_PRODUCT_TYPE_PREFIX)) {
          const fieldValues = getFilterValues(value);
          const productType = fieldValues.map((value) => ({
            productType: value,
          }));

          if (!productType) return acc;
          return [...acc, ...productType];
        }

        if (key.includes(FILTER_TAG_PREFIX)) {
          const fieldValues = getFilterValues(value);
          const tag = fieldValues.map((value) => ({tag: value}));

          if (!tag) return acc;
          return [...acc, ...tag];
        }

        if (key.includes(FILTER_VENDOR_PREFIX)) {
          const fieldValues = getFilterValues(value);
          const productVendor = fieldValues.map((value) => ({
            productVendor: value,
          }));

          if (!productVendor) return acc;
          return [...acc, ...productVendor];
        }

        if (key.includes(FILTER_CATEGORY_PREFIX)) {
          // !TODO Will fix someday...
          //  category current query: ?filter.p.t.category=Armários
          //  category input:
          //    id: 'filter.p.t.category.fr-4-8'
          //    input: {category: {id: 'fr-4-8'}}
          const fieldValues = getFilterValues(value);
          const category = fieldValues.map((value) => ({
            category: {id: value},
          }));

          if (!category) return acc;
          return [...acc, ...category];
        }
      }

      return acc;
    },
    [],
  );

  return filters as ProductFilter[];
};
