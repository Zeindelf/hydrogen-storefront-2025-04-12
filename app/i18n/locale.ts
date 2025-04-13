import type {I18nLocale} from './types';

import {COUNTRIES} from './countries';

export function getLocaleFromRequest(request: Request): I18nLocale {
  const url = new URL(request.url);
  let firstPathPart = `/${url.pathname
    .substring(1)
    .split('/')[0]
    .toLowerCase()}`;
  firstPathPart = firstPathPart.replace('.data', '');

  return COUNTRIES[firstPathPart]
    ? {
        ...COUNTRIES[firstPathPart],
        pathPrefix: firstPathPart,
      }
    : {
        ...COUNTRIES.default,
        pathPrefix: '',
      };
}
