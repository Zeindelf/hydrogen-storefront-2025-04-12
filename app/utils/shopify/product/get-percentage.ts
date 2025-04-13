import {roundToNearestFive} from './round-to-nearest-five';

export const percentFormatter = (locale: Intl.Locale['language']) =>
  new Intl.NumberFormat(locale, {style: 'percent'});

export const getPercentage = ({highPrice = 0, lowPrice = 0}) => {
  if (highPrice < lowPrice || lowPrice < 1 || highPrice < 1) {
    return 0;
  }

  const percentage = ((highPrice - lowPrice) / highPrice) * 100;

  return roundToNearestFive(percentage);
};
