import type {ShopLayout} from 'types/shopify';

import * as React from 'react';

export const useShopLayout = (layout: ShopLayout) => {
  const value = React.useMemo(
    () => ({
      isCart: layout === 'cart',
      isMinicart: layout === 'minicart',
      isProduct: layout === 'product',
      isShelf: layout === 'shelf',
    }),
    [layout],
  );

  return value;
};
