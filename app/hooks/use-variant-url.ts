import type {PartialProductVariant} from 'types/shopify';

import * as React from 'react';

import {getVariantUrl} from '~/utils/shopify';

export function useVariantUrl(handle: string, variant: PartialProductVariant) {
  return React.useMemo(() => {
    return getVariantUrl({
      handle,
      searchParams: new URLSearchParams(),
      variant,
    });
  }, [handle, variant]);
}
