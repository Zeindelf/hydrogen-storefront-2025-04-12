import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {IMAGES_PLACEHOLDERS} from '@weaverse/hydrogen';
import {cva} from 'class-variance-authority';
import * as React from 'react';

import type {OverlayProps} from '~/layout/overlay';
import type {WeaverseImageProps} from '~/layout/weaverse-image';

import {ArtDirectionImage} from '~/components/resources/art-direction-image';
import {Overlay, overlayInspector} from '~/layout/overlay';
import {layout} from '~/layout/theme/layout';
import {parseWeaverseImage} from '~/layout/weaverse-image';
import {cn} from '~/utils/helpers';

export const textContentVariants = cva(
  'flex size-full flex-col [&_.paragraph]:mx-[unset]',
  {
    defaultVariants: {
      contentPosition: 'bottom center',
    },
    variants: {
      contentPosition: layout.contentPosition.options,
      gap: layout.gap.options,
      size: layout.size.options,
      verticalPadding: layout.verticalPadding.options,
      width: layout.width.options,
    },
  },
);

export type TextContentVariantsProps = VariantProps<typeof textContentVariants>;

export interface SlideProps
  extends HydrogenComponentProps,
    OverlayProps,
    TextContentVariantsProps {
  desktopImage: WeaverseImageProps['data'];
  mobileImage: WeaverseImageProps['data'];
}

const SlideshowSlide = React.forwardRef<HTMLDivElement, SlideProps>(
  (
    {
      children,
      contentPosition,
      desktopImage,
      enableOverlay,
      gap,
      mobileImage,
      overlayColor,
      overlayColorHover,
      overlayOpacity,
      size,
      verticalPadding,
      width,
      ...props
    },
    ref,
  ) => {
    const mobile = parseWeaverseImage(mobileImage);
    const desktop = parseWeaverseImage(desktopImage);

    const style = {
      '--content-size': `${size}%`,
    } as React.CSSProperties;

    return (
      <article
        ref={ref}
        style={style}
        {...props}
        className="group relative size-full"
      >
        <Overlay
          enableOverlay={enableOverlay}
          overlayColor={overlayColor}
          overlayColorHover={overlayColorHover}
          overlayOpacity={overlayOpacity}
        />
        <ArtDirectionImage
          data={desktop}
          desktop={desktop}
          mobile={mobile}
          {...props}
        />
        <div
          className={cn(
            'absolute inset-0 z-[2]',
            textContentVariants({
              contentPosition,
              gap,
              verticalPadding,
              width,
            }),
          )}
        >
          <div className="md:w-[var(--content-size)]">{children}</div>
        </div>
      </article>
    );
  },
);

export default SlideshowSlide;

export const schema: HydrogenComponentSchema = {
  childTypes: ['subheading', 'heading', 'paragraph'],
  inspector: [
    {
      group: 'Slide',
      inputs: [
        {...layout.contentPosition.schema},
        {...layout.gap.schema},
        {...layout.verticalPadding.schema},
        {...layout.width.schema},
        {...layout.size.schema},
      ],
    },
    ...overlayInspector,
    {
      group: 'Image',
      inputs: [
        {
          helpText: '<p>Recommended with: max 560px</p>',
          label: 'Mobile Image',
          name: 'mobileImage',
          type: 'image',
        },
        {
          helpText: '<p>Recommended width: max 2000px</p>',
          label: 'Desktop Image',
          name: 'desktopImage',
          type: 'image',
        },
      ],
    },
  ],
  presets: {
    children: [
      {
        color: '#fff',
        content: 'Subheading',
        type: 'subheading',
      },
      {
        color: '#fff',
        content: 'Slide with text overlay',
        maxSize: 56,
        minSize: 16,
        size: 'scale',
        type: 'heading',
      },
      {
        color: '#fff',
        content:
          'Use this text to share information about your brand with your customers. Describe a product, share announcements, or welcome customers to your store.',
        type: 'paragraph',
      },
      {
        backgroundColor: '#00000000',
        backgroundColorHover: '#fff',
        borderColor: '#fff',
        borderColorHover: '#fff',
        content: 'Shop all',
        textColor: '#fff',
        textColorHover: '#000',
        type: 'button',
        variant: 'custom',
      },
    ],
    contentPosition: 'center center',
    desktopImage: IMAGES_PLACEHOLDERS.banner_1,
    enableOverlay: true,
    // backgroundImage: IMAGES_PLACEHOLDERS.banner_1,
    mobileImage: IMAGES_PLACEHOLDERS.banner_2,
    overlayOpacity: 50,
    verticalPadding: 'large',
  },
  title: 'Slide',
  type: 'slideshow-slide',
};
