import type {AppLoadContext} from '@shopify/remix-oxygen';

import type {SitemapField} from '~/lib/sitemap';
import type {EnhancedMenuItem} from '~/utils/shopify';

import {FOOTER_MENU_HANDLE} from '~/config/constants';
import {MENU_QUERY} from '~/graphql/storefront/queries';
import {normalizeSlashes} from '~/utils/helpers';
import {parseMenu} from '~/utils/shopify';

export const createMainSitemap = async ({
  context,
  url,
}: {
  context: AppLoadContext;
  url: string;
}) => {
  const data = await context.storefront.query(MENU_QUERY, {
    variables: {handle: FOOTER_MENU_HANDLE},
  });

  const navigation = context.navigation.items;
  const footer = parseMenu(data.menu, context.shopify.primaryDomain).items;

  const mappedPages = flatNavigation([...navigation, ...footer])
    .filter((nav) => nav.type === 'HTTP' || nav.type === 'FRONTPAGE')
    .filter((nav) => !nav.isExternal)
    .reduce(
      (acc: EnhancedMenuItem[], nav) =>
        !acc.find((item) => item.href === nav.href) ? [...acc, nav] : acc,
      [],
    );

  const formattedPages = mappedPages.map(
    (page): SitemapField => ({
      lastmod: new Date().toISOString(),
      loc: normalizeSlashes(`${url}/${page.href}`),
    }),
  );

  const homepage: SitemapField = {
    lastmod: new Date().toISOString(),
    loc: url,
  };

  const items = [homepage, ...formattedPages];
  const pages = Array.from(new Set(items.map((val) => val.loc))).map((loc) =>
    items.find((val) => val.loc === loc),
  );

  return pages as SitemapField[];
};

const flatNavigation = (nav: any[]): EnhancedMenuItem[] => {
  let items: any[] = [];

  return nav
    .map((n: any) => {
      const m = {...n};

      if (m.items && m.items.length) {
        items = [...items, ...m.items];
      }

      delete m.items;
      return m;
    })
    .concat(items.length ? flatNavigation(items) : items);
};
