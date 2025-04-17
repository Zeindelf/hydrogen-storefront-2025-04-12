import type {PartialImage} from 'types/shopify';

import * as React from 'react';

import {cn} from '~/utils/helpers';

import {ShopifyImage} from '../shopify-image';

interface ArtDirectionImageProps
  extends React.ComponentProps<typeof ShopifyImage> {
  desktop: PartialImage; // Desktop image (>768px)

  mobile: PartialImage; // Mobile image (<=767)
}

export const ArtDirectionImage = ({
  className,
  desktop,
  mobile,
  ...props
}: ArtDirectionImageProps) => {
  const mobileAspect = `${mobile.width}/${mobile.height}`;
  const desktopAspect = `${desktop.width}/${desktop.height}`;

  return (
    <picture>
      <source
        height={mobile.height || 0}
        media="(max-width: 767px)"
        srcSet={mobile.url}
        width={mobile.width || 0}
      />
      <source
        height={desktop.height || 0}
        media="(min-width: 768px)"
        srcSet={desktop.url}
        width={desktop.width || 0}
      />

      <ShopifyImage
        className={cn(
          `aspect-[${mobileAspect}] md:aspect-[${desktopAspect}]`,
          className,
        )}
        src={mobile.url}
        {...props}
      />
    </picture>
  );
};
