import type {MenuItemResource} from '@shopify/hydrogen/storefront-api-types';

import type {EnhancedMenu} from '../storefront';

import {isCollectionType} from './is-collection-type';

export type CollectionItems = {
  collection: string;
  parts: string[];
  pathname: string;
  title: string;
} & MenuItemResource;

const getCollectionItems = (item: any) =>
  Array.isArray(item.items) && isCollectionType(item) ? item.items : null;

const getCollectionInfo = (item: any): CollectionItems =>
  isCollectionType(item) && {
    ...item.resource,
    collection: item.resource.title,
    parts: item.href.split('/').filter(Boolean),
    pathname: item.href,
    title: item.title,
  };

export const createCollectionsPaths = (navigation: EnhancedMenu) => {
  const parent = navigation.items.filter(isCollectionType);
  const child = parent.map(getCollectionItems).flat();
  const subChild = child.map(getCollectionItems).flat();

  const department = parent.map(getCollectionInfo);
  const category = child.map(getCollectionInfo);
  const subCategory = subChild.map(getCollectionInfo);

  return {
    category,
    collectionsPaths: [...department, ...category, ...subCategory],
    department,
    subCategory,
  };
};
