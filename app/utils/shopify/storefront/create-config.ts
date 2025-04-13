import type {AdminShopQuery} from 'types/generated/admin';
import type {LocationQuery, ShopQuery} from 'types/generated/storefront';

import {DEFAULT_LOCALE} from '~/i18n/countries';

export const createConfig = ({
  adminShop,
  localization,
  shop,
}: {
  adminShop: AdminShopQuery['adminShop'];
  localization: LocationQuery['localization'];
  shop: ShopQuery['shop'];
}) => {
  const languageIsoCode = localization.language.isoCode;
  const countryIsoCode =
    localization.country.isoCode || shop.paymentSettings.countryCode;
  const currencyCode =
    localization.country.currency.isoCode || shop.paymentSettings.currencyCode;

  /**
   * BCP 47 Language Code (case insensitive)
   * https://en.wikipedia.org/wiki/IETF_language_tag
   */
  const locale = languageIsoCode?.includes('_')
    ? languageIsoCode.replace('_', '-')
    : `${languageIsoCode}-${countryIsoCode}`;

  return {
    address: {
      ...adminShop.billingAddress,
    },
    brand: shop.brand,
    countryCode: countryIsoCode || DEFAULT_LOCALE.country, // BR
    countryName: localization.country.name || DEFAULT_LOCALE.country, // Brasil
    currencyCode: currencyCode || DEFAULT_LOCALE.currency, // BRL
    description: shop.description || 'Shopico Shopify Hydrogen Headless',
    email: adminShop.contactEmail,
    language: languageIsoCode || DEFAULT_LOCALE.language, // PT_BR
    locale: locale || DEFAULT_LOCALE.locale, // pt-BR
    name: shop.name || 'Storefront',
    primaryDomain: shop.primaryDomain || process.env.PUBLIC_STORE_DOMAIN,
    shopId: shop.id,
    timezone: {
      iana: adminShop.ianaTimezone,
      offset: adminShop.timezoneOffset,
    },
    unitSystem: localization.country.unitSystem, // METRIC_SYSTEM
    weightUnit: adminShop.weightUnit, // KILOGRAMS
  };
};
