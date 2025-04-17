import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
  WeaverseImage,
} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {IMAGES_PLACEHOLDERS} from '@weaverse/hydrogen';
import {cva} from 'class-variance-authority';
import * as React from 'react';

import {ArtDirectionImage} from '~/components/resources/art-direction-image';
import {Carousel} from '~/components/ui/carousel';
import {Link} from '~/components/ui/link';
import {layoutInputs} from '~/layout/section';
import {cn, getImageLoadingPriority} from '~/utils/helpers';

const variants = cva('flex size-full flex-col [&_.paragraph]:mx-[unset]', {
  defaultVariants: {
    contentPosition: 'bottom left',
  },
  variants: {
    contentPosition: {
      'bottom center':
        'items-center justify-end [&_.paragraph]:[text-align:center]',
      'bottom left': 'items-start justify-end [&_.paragraph]:[text-align:left]',
      'bottom right': 'items-end justify-end [&_.paragraph]:[text-align:right]',
      'center center':
        'items-center justify-center [&_.paragraph]:[text-align:center]',
      'center left':
        'items-start justify-center [&_.paragraph]:[text-align:left]',
      'center right':
        'items-end justify-center [&_.paragraph]:[text-align:right]',
      'top center':
        'items-center justify-start [&_.paragraph]:[text-align:center]',
      'top left': 'items-start justify-start [&_.paragraph]:[text-align:left]',
      'top right': 'items-end justify-start [&_.paragraph]:[text-align:right]',
    },
    gap: {
      0: '',
      12: 'space-y-3',
      16: 'space-y-4',
      20: 'space-y-5',
      24: 'space-y-3 lg:space-y-6',
      28: 'space-y-3.5 lg:space-y-7',
      32: 'space-y-4 lg:space-y-8',
      36: 'space-y-4 lg:space-y-9',
      4: 'space-y-1',
      40: 'space-y-5 lg:space-y-10',
      44: 'space-y-5 lg:space-y-11',
      48: 'space-y-6 lg:space-y-12',
      52: 'space-y-6 lg:space-y-[52px]',
      56: 'space-y-7 lg:space-y-14',
      60: 'space-y-7 lg:space-y-[60px]',
      8: 'space-y-2',
    },
    verticalPadding: {
      large: 'py-12 md:py-24 lg:py-32',
      medium: 'py-8 md:py-12 lg:py-16',
      none: '',
      small: 'py-4 md:py-6 lg:py-8',
    },
    width: {
      fixed: 'max-w-page mx-auto px-3 md:px-10 lg:px-16',
      full: '',
      stretch: 'px-3 md:px-10 lg:px-16',
    },
  },
});

export interface SlideProps
  extends HydrogenComponentProps,
    VariantProps<typeof variants> {
  backgroundColor: string;
  desktopImage: string | WeaverseImage;
  mobileImage: string | WeaverseImage;
}

const SlideshowSlide = React.forwardRef<HTMLDivElement, SlideProps>(
  (
    {
      children,
      contentPosition,
      desktopImage,
      gap,
      mobileImage,
      verticalPadding,
      width,
      ...props
    },
    ref,
  ) => {
    const dataMobile =
      typeof mobileImage === 'string'
        ? {altText: 'Section background', url: mobileImage}
        : mobileImage;

    const dataDesktop =
      typeof desktopImage === 'string'
        ? {altText: 'Section background', url: desktopImage}
        : desktopImage;
    return (
      // <div ref={ref} {...props} className="size-full">
      //   <div
      //     className={variants({contentPosition, gap, verticalPadding, width})}
      //   >
      //     {children}
      //   </div>
      // </div>
      <Carousel.Item
        className={cn(
          'overflow-hidden pl-0 md:rounded-lg',
          variants({contentPosition, gap, verticalPadding, width}),
        )}
        ref={ref}
        {...props}
      >
        <Link
          ariaLabel={`Imagem do banner principal`}
          title={dataDesktop.altText}
          to="/"
        >
          <ArtDirectionImage
            alt={dataDesktop.altText}
            desktop={desktopImage as WeaverseImage}
            loading={getImageLoadingPriority(1, 1)}
            mobile={mobileImage as WeaverseImage}
            src={dataMobile.url}
          />
          {children}
        </Link>
      </Carousel.Item>
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
        {
          defaultValue: 'center center',
          label: 'Content position',
          name: 'contentPosition',
          type: 'position',
        },
        ...layoutInputs.filter(
          (inp) => inp.name !== 'divider' && inp.name !== 'borderRadius',
        ),
      ],
    },
    {
      group: 'Image',
      inputs: [
        {
          helpText: '<p>Max width: 560px</p>',
          label: 'Mobile Image',
          name: 'mobileImage',
          type: 'image',
        },
        {
          helpText: '<p>Max width: 2000px</p>',
          label: 'Desktop Image',
          name: 'desktopImage',
          type: 'image',
        },
      ],
    },
  ],
  presets: {
    backgroundFit: 'cover',
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
