import type {PartialProductVariant} from 'types/shopify';

import {PRODUCT_DEFAULT_VARIANT} from '~/config/constants';

export const variantIsDefault = (variant?: PartialProductVariant) => {
  const isDefaultVariant = Boolean(
    variant?.selectedOptions?.find(
      (option) =>
        option?.name === PRODUCT_DEFAULT_VARIANT.name &&
        option?.value === PRODUCT_DEFAULT_VARIANT.value,
    ),
  );

  return isDefaultVariant;
};
