import type {Domain} from '@shopify/hydrogen/storefront-api-types';
import type {
  ChildMenuItemFragment,
  MenuFragment,
  ParentMenuItemFragment,
  SubChildMenuItemFragment,
} from 'types/generated/storefront';

import {isCollectionType} from '../collection';
import {
  createBlogUrl,
  createCollectionUrl,
  createPageUrl,
  createPoliciesUrl,
  createProductUrl,
  createSearchUrl,
} from './shopify-urls';

type EnhancedMenuItemProps = {
  handle?: string;
  href: string;
  isExternal?: boolean;
  target: string;
};

export type SubChildEnhancedMenuItem = EnhancedMenuItemProps &
  SubChildMenuItemFragment;

export type ChildEnhancedMenuItem = {
  items: ChildEnhancedMenuItem[];
} & (ChildMenuItemFragment & EnhancedMenuItemProps);

export type ParentEnhancedMenuItem = {
  items: ChildEnhancedMenuItem[];
} & (EnhancedMenuItemProps & ParentMenuItemFragment);

export type EnhancedMenuItem =
  | ChildEnhancedMenuItem
  | ParentEnhancedMenuItem
  | SubChildEnhancedMenuItem;

export type EnhancedMenu = {
  items: ParentEnhancedMenuItem[];
} & Pick<MenuFragment, '__typename' | 'id'>;

type ParseTypeArgs = {
  pathname: string;
  resource: any;
  type: string;
};

const parseType = ({pathname, resource, type}: ParseTypeArgs) => {
  if (!type) return '';

  switch (type) {
    case 'ARTICLE': {
      const parts = pathname?.split('/') || [];
      const articleHandle = parts.pop();
      const blogHandle = parts.pop();

      return createBlogUrl(blogHandle, articleHandle);
    }
    case 'BLOG':
      return createBlogUrl(resource?.handle);
    case 'COLLECTION':
      return resource?.handle;
    case 'FRONTPAGE':
      return '/';
    case 'PAGE':
      return createPageUrl(resource?.handle);
    case 'PRODUCT':
      return createProductUrl(resource?.handle);
    case 'SEARCH':
      return createSearchUrl();
    case 'SHOP_POLICY':
      return createPoliciesUrl(resource?.handle);
    default:
      return pathname;
  }
};

function parseItem(domain?: string) {
  return function toParse(
    item:
      | MenuFragment['items'][number]
      | MenuFragment['items'][number]['items'][number]
      | MenuFragment['items'][number]['items'][number]['items'][number],
  ): EnhancedMenuItem | null {
    if (!item?.url || !item?.type) {
      console.warn('Invalid menu item. Must include a url and type.');
      return null;
    }

    const {host, pathname} = new URL(item.url);
    const isInternalLink = host === domain;

    const parsedItem = isInternalLink
      ? {
          ...item,
          href: parseType({
            pathname,
            resource: item?.resource,
            type: item.type,
          }),
          isExternal: false,
          target: '_self',
        }
      : {
          ...item,
          href: item.url,
          isExternal: true,
          target: '_blank',
        };

    if ('items' in item) {
      return {
        ...parsedItem,
        items: item.items.map(parseItem(domain)).filter(Boolean),
      } as EnhancedMenu['items'][number];
    }

    return parsedItem as EnhancedMenu['items'][number]['items'][number];
  };
}

const collectionHandle = (item: any) =>
  item.type === 'COLLECTION' ? item.resource?.handle : '';

const createCollectionHandles = (menu: EnhancedMenu) => {
  const menuHandles = menu.items.map((parent: ParentEnhancedMenuItem) => ({
    ...parent,
    href: isCollectionType(parent)
      ? createCollectionUrl(collectionHandle(parent))
      : parent.href,
    items: parent.items.map((child: ChildEnhancedMenuItem) => ({
      ...child,
      href: isCollectionType(child)
        ? createCollectionUrl(
            `${collectionHandle(parent)}/${collectionHandle(child)}`,
          )
        : child.href,
      items: child.items.map((subChild: SubChildEnhancedMenuItem) => ({
        ...subChild,
        href: isCollectionType(subChild)
          ? createCollectionUrl(
              `${collectionHandle(parent)}/${collectionHandle(
                child,
              )}/${collectionHandle(subChild)}`,
            )
          : subChild.href,
      })),
    })),
  }));

  return {
    ...menu,
    items: menuHandles,
  } as EnhancedMenu;
};

const EMPTY_MENU: EnhancedMenu = {
  __typename: 'Menu',
  id: '',
  items: [],
};

export const parseMenu = (
  menu?: MenuFragment | null,
  primaryDomain?: Partial<Domain>,
) => {
  if (!primaryDomain?.host) {
    throw new Error('Missing storeDomain param');
  }

  if (!menu || !menu?.items) return EMPTY_MENU;

  const parser = parseItem(primaryDomain.host);

  const parsedMenu = {
    ...menu,
    items: menu.items.map(parser).filter(Boolean),
  } as EnhancedMenu;

  return createCollectionHandles(parsedMenu);
};
