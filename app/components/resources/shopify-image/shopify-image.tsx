import {
  Image,
  parseAspectRatio,
  shopifyLoader,
} from '@shopify/hydrogen-react/Image';
import React from 'react';

import {DEFAULT_IMAGE_URL} from '~/config/constants';
import {cn} from '~/utils/helpers';
export interface ShopifyImageProps extends React.ComponentProps<typeof Image> {}

/**
 * Shopify’s Image component is a wrapper around the HTML image element.
 * It supports the same props as the HTML `img` element, but automatically
 * generates the srcSet and sizes attributes for you. For most use cases,
 * you’ll want to set the `aspectRatio` prop to ensure the image is sized
 * correctly.
 *
 * @remarks
 * - `decoding` is set to `async` by default.
 * - `loading` is set to `lazy` by default.
 * - `alt` will automatically be set to the `altText` from the Storefront API if passed in the `data` prop
 * - `src` will automatically be set to the `url` from the Storefront API if passed in the `data` prop
 * - `placeholder` is set to `true` by default.
 *
 * @example
 * A responsive image with a 4:5 aspect ratio:
 * ```
 * <ShopifyImage
 *   data={product.featuredImage}
 *   aspectRatio="4/5"
 *   sizes="(min-width: 45em) 40vw, 100vw"
 * />
 * ```
 * @example
 * A fixed size image:
 * ```
 * <ShopifyImage
 *   data={product.featuredImage}
 *   width={100}
 *   height={100}
 * />
 * ```
 *
 * @link https://shopify.dev/docs/api/hydrogen-react/components/image
 */
export const ShopifyImage = React.forwardRef<
  HTMLImageElement,
  {
    /**
     * Set to `true` to enable LQIP (Low Quality Image Placeholder).
     * The LQIP image is used as a placeholder for images that are too large to load and
     * is cropped to the aspect ratio of the original image.
     * It renders as a blurred background while the original image is loading.
     */
    placeholder?: boolean;
  } & ShopifyImageProps
>(
  (
    {
      aspectRatio,
      className,
      crop,
      data,
      placeholder = true,
      sizes = '(min-width: 45em) 40vw, 100vw',
      style,
      ...passthroughProps
    },
    ref,
  ) => {
    const placeholderWidth = 30;

    const placeholderUrl = shopifyLoader({
      crop: crop || 'center',
      height: aspectRatio
        ? placeholderWidth * (parseAspectRatio(aspectRatio) ?? 1)
        : undefined,
      src: data?.url || DEFAULT_IMAGE_URL,
      width: placeholderWidth,
    });

    const {pathname: placeholderPathname} = new URL(placeholderUrl);

    // Don't use LQIP if the image is a PNG or SVG
    if (
      placeholderPathname.includes('.png') ||
      placeholderPathname.includes('.svg')
    ) {
      placeholder = false;
    }

    const Placeholder =
      placeholder &&
      ({
        backgroundImage: `url(${placeholderUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      } as React.CSSProperties);

    return (
      <Image
        className={cn('object-cover', className)}
        crop={crop}
        data={data}
        ref={ref}
        sizes={sizes}
        style={{
          ...Placeholder,
          ...style,
        }}
        {...passthroughProps}
      />
    );
  },
);

ShopifyImage.displayName = 'ShopifyImage';
