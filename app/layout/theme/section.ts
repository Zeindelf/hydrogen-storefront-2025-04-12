import type {BasicInput} from '@weaverse/hydrogen';

const width = {
  options: {
    container: 'container w-full h-full',
    full: 'w-full h-full',
  },
  schema: {
    configs: {
      options: [
        {label: 'Container (Default)', value: 'container'},
        {label: 'Full Screen', value: 'full'},
      ],
    },
    defaultValue: 'container',
    label: 'Content width',
    name: 'width',
    type: 'select',
  } as BasicInput,
};

const gap = {
  options: {
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
  schema: {
    configs: {
      max: 60,
      min: 0,
      step: 4,
      unit: 'px',
    },
    defaultValue: 16,
    label: 'Items spacing',
    name: 'gap',
    type: 'range',
  } as BasicInput,
};

const verticalPadding = {
  options: {
    large: 'py-12 md:py-24 lg:py-32',
    medium: 'py-8 md:py-12 lg:py-16',
    none: '',
    small: 'py-4 md:py-6 lg:py-8',
  },
  schema: {
    configs: {
      options: [
        {label: 'None', value: 'none'},
        {label: 'Small', value: 'small'},
        {label: 'Medium', value: 'medium'},
        {label: 'Large', value: 'large'},
      ],
    },
    defaultValue: 'medium',
    label: 'Vertical padding',
    name: 'verticalPadding',
    type: 'select',
  } as BasicInput,
};

export const section = {
  gap,
  verticalPadding,
  width,
};
