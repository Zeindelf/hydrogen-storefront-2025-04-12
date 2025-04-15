import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';
import type {PartialDeep} from 'type-fest';

import * as React from 'react';

import type {UsePriceOptions} from '~/hooks/use-price';
import type {TextProps} from '~/layout/text';

import {usePrice} from '~/hooks/use-price';
import {Text} from '~/layout/text';

export interface PriceProps extends TextProps {
  data?: UsePriceOptions;
}

export interface ItemPrice {
  compareAtPrice?: null | PartialDeep<MoneyV2, {recurseIntoArrays: true}>;
  price?: PartialDeep<MoneyV2, {recurseIntoArrays: true}>;
}

export const Price = React.forwardRef<HTMLDivElement, PriceProps>(
  ({data, ...props}, ref) => {
    const {amount} = usePrice(data);

    return (
      <Text as={props.as ?? 'span'} ref={ref} {...props}>
        {amount}
      </Text>
    );
  },
);
