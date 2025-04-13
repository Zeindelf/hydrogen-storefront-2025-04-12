import type {Metafield} from '@shopify/hydrogen/storefront-api-types';

import {parseMetafield} from '@shopify/hydrogen';
import {isEmpty} from 'ramda';

export interface ParsedBase extends Metafield {
  parsedValue: unknown;
  type: string;
}

export const parseMetafieldsToObject = function <InputType, ReturnType>(
  metafields: InputType,
) {
  if (isEmpty(metafields) || !Array.isArray(metafields)) return null;

  const cleanArr: Metafield[] = metafields.filter(Boolean);

  if (isEmpty(cleanArr)) return null;

  const parsedMetafield = cleanArr
    .filter((field) => !field.type.includes('metaobject'))
    .map<ParsedBase>((metafield: any) => parseMetafield(metafield));

  return parsedMetafield?.reduce((acc, metafield) => {
    if (!metafield?.key) return acc;

    return {
      ...acc,
      [metafield.key]: metafield.parsedValue,
    };
  }, {} as ReturnType);
};
