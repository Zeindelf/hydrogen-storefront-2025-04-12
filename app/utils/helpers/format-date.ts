import {DEFAULT_LOCALE} from '~/i18n/countries';

/** @refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat */
export const formatDate = ({
  date,
  locale,
  options = {},
}: {
  date: Date | string;
  locale?: Intl.Locale | string;
  options?: Intl.DateTimeFormatOptions;
}) => {
  return new Intl.DateTimeFormat(locale || DEFAULT_LOCALE.locale, {
    timeZone: 'America/Sao_Paulo',
    ...options,
  }).format(new Date(date));
};
