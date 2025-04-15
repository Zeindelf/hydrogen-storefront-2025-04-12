import type {CurrencyCode} from '@shopify/hydrogen/storefront-api-types';

import * as React from 'react';

import {useRootLoaderData} from '~/root';

import {useLocale} from './use-locale';

export const useFormatter = (
  locale: string,
  options?: Intl.NumberFormatOptions,
): (() => Intl.NumberFormat) => {
  return React.useMemo(() => {
    let memoized: Intl.NumberFormat;
    return () => (memoized ??= new Intl.NumberFormat(locale, options));
  }, [locale, options]);
};

export type UsePriceOptions = {
  amount?: number | string;
  currencyCode?: CurrencyCode;
};

export type UsePriceHookValue = {
  amount: string;
  parts: Intl.NumberFormatPart[];
  splitted: {
    fraction: Intl.NumberFormatPartTypes;
    integer: Intl.NumberFormatPartTypes;
  };
};

export const usePrice = (data?: UsePriceOptions): UsePriceHookValue => {
  const {shopify} = useRootLoaderData();
  const {locale} = useLocale();
  const defaultCurrency = data?.currencyCode ?? shopify.currencyCode;
  const notCurrency = data?.currencyCode === 'XXX';

  const amount = data?.amount || 0;
  const currency = notCurrency ? shopify.currencyCode : defaultCurrency;

  const priceFormatter = useFormatter(locale, {
    currency,
    style: 'currency',
  });

  // By wrapping these properties in functions, we only
  // create formatters if they are going to be used.
  const lazyFormatters = React.useMemo(
    () => ({
      amount: () => priceFormatter().format(Number(amount)),
      parts: () => priceFormatter().formatToParts(Number(amount)),
      splitted: () => {
        const parts = priceFormatter().formatToParts(Number(amount));

        return {
          fraction: parts[parts.length - 1].value,
          integer: parts
            .filter((part) =>
              ['currency', 'decimal', 'group', 'integer', 'literal'].includes(
                part.type,
              ),
            )
            .map((part) => part.value)
            .join(''),
        };
      },
    }),
    [amount, priceFormatter],
  );

  return React.useMemo(
    () =>
      new Proxy(lazyFormatters as unknown as UsePriceHookValue, {
        get: (target, key) => Reflect.get(target, key)?.call(null),
      }),
    [lazyFormatters],
  );
};
