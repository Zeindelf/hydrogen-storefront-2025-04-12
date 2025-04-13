import type {CollectionItems} from './create-collections-paths';

import {createCollectionUrl} from '../storefront';

export const verifyCollectionPage = ({
  collectionsPaths,
  pathname,
}: {
  collectionsPaths: CollectionItems[];
  pathname: string;
}) => {
  const isCollectionPage = collectionsPaths
    .map((item) => item.pathname)
    .includes(createCollectionUrl(pathname));

  return {isCollectionPage};
};
