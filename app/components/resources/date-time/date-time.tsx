import * as React from 'react';

import {DEFAULT_LOCALE} from '~/i18n/countries';
import {formatDate} from '~/utils/helpers';

export interface DateTimeProps extends React.HTMLAttributes<HTMLTimeElement> {
  date: Date | string;
  locale?: Intl.Locale | string;
  options?: Intl.DateTimeFormatOptions;
}

export const DateTime = React.forwardRef<HTMLTimeElement, DateTimeProps>(
  ({date, locale = DEFAULT_LOCALE.locale, options, ...props}, ref) => {
    const published = formatDate({date, locale, options});

    return (
      <time dateTime={date.toLocaleString(locale)} ref={ref} {...props}>
        {published}
      </time>
    );
  },
);
