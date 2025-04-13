import type {PartialProductVariant} from 'types/shopify';

import {createProductUrl} from '../storefront';
import {variantIsDefault} from './variant-is-default';

export const getVariantUrl = ({
  handle,
  searchParams = new URLSearchParams(),
  variant,
}: {
  handle: string;
  searchParams?: URLSearchParams;
  variant?: PartialProductVariant;
}) => {
  const hasProperty = Object.prototype.hasOwnProperty.call(
    variant,
    'selectedOptions',
  );

  if (!variant || !hasProperty) return '';

  const isDefaultVariant = variantIsDefault(variant);
  variant.selectedOptions?.forEach((option) => {
    if (isDefaultVariant) return;

    searchParams.set(String(option?.name), String(option?.value));
  });

  const searchString = searchParams.toString();

  return (
    createProductUrl(handle) +
    (searchString ? '?' + searchParams.toString() : '')
  );
};
