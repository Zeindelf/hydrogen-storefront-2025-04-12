import type {
  InspectorGroup,
  WeaverseImage as WeaverseImageType,
} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';

export type WeaverseImageProps = string | WeaverseImageType;

export const parseWeaverseImage = (image: WeaverseImageProps) => {
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

export const WeaverseImage = () => {
  return <img alt="Weaverse" src="/image.jpeg" />;
};

export const weaverseImageInputs: InspectorGroup['inputs'] = [
  {
    configs: {
      options: [
        {label: 'Section', value: 'section'},
        {label: 'Content', value: 'content'},
      ],
    },
    defaultValue: 'section',
    label: 'Background for',
    name: 'backgroundFor',
    type: 'select',
  },
  {
    defaultValue: '',
    label: 'Background color',
    name: 'backgroundColor',
    type: 'color',
  },
  {
    label: 'Background image',
    name: 'backgroundImage',
    type: 'image',
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
