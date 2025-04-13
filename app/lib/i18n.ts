import type {I18nBase} from '@shopify/hydrogen';

export function getLocaleFromRequest(request: Request): I18nBase {
  const defaultLocale: I18nBase = {country: 'BR', language: 'PT'};
  const supportedLocales = {
    DE: 'DE',
    ES: 'ES',
    FR: 'FR',
    JP: 'JA',
  } as Record<I18nBase['country'], I18nBase['language']>;

  const url = new URL(request.url);
  const domain = url.hostname
    .split('.')
    .pop()
    ?.toUpperCase() as keyof typeof supportedLocales;

  return domain && supportedLocales[domain]
    ? {country: domain, language: supportedLocales[domain]}
    : defaultLocale;
}
