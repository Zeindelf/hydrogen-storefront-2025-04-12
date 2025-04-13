import type {Locale as WeaverseLocale} from '@weaverse/hydrogen';

export interface Locale extends WeaverseLocale {
  locale: Intl.Locale['language'];
}

export type Localizations = Record<string, Locale>;

export interface I18nLocale extends Locale {
  pathPrefix: string;
}
