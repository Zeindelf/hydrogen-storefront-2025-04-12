import type {
  InspectorGroup,
  WeaverseImage as WeaverseImageType,
} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';

import type {ShopifyImageProps} from '~/components/resources/shopify-image';

import {ArtDirectionImage} from '~/components/resources/art-direction-image';
import {ShopifyImage} from '~/components/resources/shopify-image';
import {cn} from '~/utils/helpers';

export type WeaverseImage = string | WeaverseImageType;

export const parseWeaverseImage = (image: WeaverseImage) => {
  return typeof image === 'string'
    ? {altText: 'Section background', url: image}
    : image;
};

const weaverseImageVariants = cva('absolute inset-0 -z-1 size-full', {
  defaultVariants: {
    backgroundFit: 'cover',
    backgroundPosition: 'center',
  },
  variants: {
    backgroundFit: {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
    },
    backgroundPosition: {
      'bottom center': 'object-[bottom_center]',
      'bottom left': 'object-[bottom_left]',
      'bottom right': 'object-[bottom_right]',
      center: 'object-[center_center]',
      'center left': 'object-[center_left]',
      'center right': 'object-[center_right]',
      'top center': 'object-[top_center]',
      'top left': 'object-[top_left]',
      'top right': 'object-[top_right]',
    },
  },
});

export type WeaverseImageVariantsProps = VariantProps<
  typeof weaverseImageVariants
>;

export interface WeaverseImageProps
  extends Omit<ShopifyImageProps, 'data'>,
    WeaverseImageVariantsProps {
  data: WeaverseImage;
  mobileImage: WeaverseImage;
}

export const WeaverseImage = ({
  backgroundFit,
  backgroundPosition,
  className,
  data,
  mobileImage,
  ...props
}: WeaverseImageProps) => {
  if (data && mobileImage) {
    const desktop = parseWeaverseImage(data);
    const mobile = parseWeaverseImage(mobileImage);

    return (
      <ArtDirectionImage
        className={cn(
          weaverseImageVariants({backgroundFit, backgroundPosition, className}),
        )}
        data={desktop}
        desktop={desktop}
        mobile={mobile}
        {...props}
      />
    );
  }

  const image = parseWeaverseImage(data);

  return (
    <ShopifyImage
      className={weaverseImageVariants({
        backgroundFit,
        backgroundPosition,
        className,
      })}
      data={image}
      {...props}
    />
  );
};

export const weaverseImageInputs: InspectorGroup['inputs'] = [
  {
    defaultValue: '',
    label: 'Background color',
    name: 'backgroundColor',
    type: 'color',
  },
  {
    condition: 'backgroundImage.ne.nil',
    configs: {
      options: [
        {label: 'Fill', value: 'fill'},
        {label: 'Cover', value: 'cover'},
        {label: 'Contain', value: 'contain'},
      ],
    },
    defaultValue: 'cover',
    label: 'Background fit',
    name: 'backgroundFit',
    type: 'select',
  },
  {
    condition: 'backgroundImage.ne.nil',
    defaultValue: 'center',
    label: 'Background position',
    name: 'backgroundPosition',
    type: 'position',
  },
];
