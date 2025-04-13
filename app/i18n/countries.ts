import type {Locale, Localizations} from './types';

export const DEFAULT_LOCALE: Locale = {
  country: 'BR',
  currency: 'BRL',
  label: 'Brasil (BRL R$)',
  language: 'PT',
  locale: 'pt-BR',
};

export const COUNTRIES: Localizations = {
  '/en': {
    country: 'US',
    currency: 'USD',
    label: 'United States (USD $)',
    language: 'EN',
    locale: 'en-US',
  },
  '/en-ca': {
    country: 'CA',
    currency: 'CAD',
    label: 'Canada (CAD $)',
    language: 'EN',
    locale: 'en-CA',
  },
  '/en-es': {
    country: 'ES',
    currency: 'EUR',
    label: 'Spain (EUR €)',
    language: 'EN',
    locale: 'es-ES',
  },
  default: DEFAULT_LOCALE,
};
