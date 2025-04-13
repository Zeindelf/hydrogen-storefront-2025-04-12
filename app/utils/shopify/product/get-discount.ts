import {is} from 'ramda';

import {DEFAULT_LOCALE} from '~/i18n/countries';

import {getPercentage, percentFormatter} from './get-percentage';

export const getDiscount = ({
  highPrice = 0,
  locale = DEFAULT_LOCALE.locale,
  lowPrice = 0,
}: {
  highPrice?: number | string;
  locale?: Intl.Locale['language'];
  lowPrice?: number | string;
}) => {
  const lowValue = is(String, lowPrice) ? parseFloat(lowPrice) : lowPrice;
  const highValue = is(String, highPrice) ? parseFloat(highPrice) : highPrice;
  const rawPercentage = getPercentage({
    highPrice: highValue,
    lowPrice: lowValue,
  });

  return {
    discountPercentage: percentFormatter(locale).format(rawPercentage / 100),
    discountValue: highValue - lowValue,
    hasDiscount: Boolean(rawPercentage),
  };
};
