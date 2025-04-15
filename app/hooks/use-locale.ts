import type {I18nLocale} from '~/i18n/types';

import {DEFAULT_LOCALE} from '~/i18n/countries';
import {useRootLoaderData} from '~/root';

/**
 * Get selected locale of buyer
 * @returns Locale
 */
export function useLocale(): I18nLocale {
  const rootData = useRootLoaderData();
  return (rootData?.selectedLocale ?? DEFAULT_LOCALE) as I18nLocale;
}
