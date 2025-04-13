import type {Metaobject} from '@shopify/hydrogen/storefront-api-types';
import type {PartialDeep} from 'type-fest';

import {isEmpty} from 'ramda';

type PartialMetaobject = PartialDeep<Metaobject, {recurseIntoArrays: true}>;

export const parseMetaobject = <ReturnType>(nodes?: PartialMetaobject[]) => {
  const references = nodes?.reduce((acc, item) => {
    if (isEmpty(item?.fields)) return acc;

    const fields = (item.fields || []).map((field) => ({
      [field?.key!]: field?.value,
    }));
    const reference = Object.assign({}, ...fields);

    return [...acc, reference];
  }, [] as ReturnType[]);

  return references as ReturnType[];
};
