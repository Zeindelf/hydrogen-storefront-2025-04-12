import type {BasicInput} from '@weaverse/hydrogen';

const contentPosition = {
  options: {
    'bottom center':
      'items-center justify-end [&_.paragraph]:[text-align:center] [&_.heading]:[text-align:center] [&_.button]:[align-self:center]',
    'bottom left':
      'items-start justify-end [&_.paragraph]:[text-align:left] [&_.heading]:[text-align:left] [&_.button]:[align-self:start]',
    'bottom right':
      'items-end justify-end [&_.paragraph]:[text-align:right] [&_.heading]:[text-align:right] [&_.button]:[align-self:end]',
    'center center':
      'items-center justify-center [&_.paragraph]:[text-align:center] [&_.heading]:[text-align:center] [&_.button]:[align-self:center]',
    'center left':
      'items-start justify-center [&_.paragraph]:[text-align:left] [&_.heading]:[text-align:left] [&_.button]:[align-self:start]',
    'center right':
      'items-end justify-center [&_.paragraph]:[text-align:right] [&_.heading]:[text-align:right] [&_.button]:[align-self:end]',
    'top center':
      'items-center justify-start [&_.paragraph]:[text-align:center] [&_.heading]:[text-align:center] [&_.button]:[align-self:center]',
    'top left':
      'items-start justify-start [&_.paragraph]:[text-align:left] [&_.heading]:[text-align:left] [&_.button]:[align-self:start]',
    'top right':
      'items-end justify-start [&_.paragraph]:[text-align:right] [&_.heading]:[text-align:right] [&_.button]:[align-self:end]',
  },
  schema: {
    defaultValue: 'center center',
    label: 'Content position',
    name: 'contentPosition',
    type: 'position',
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

const size = {
  options: {},
  schema: {
    configs: {
      max: 100,
      min: 25,
      step: 5,
      unit: '%',
    },
    defaultValue: 100,
    label: 'Size content',
    name: 'size',
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

const width = {
  options: {
    container: 'container w-full h-full',
    fixed: 'max-w-page mx-auto px-3 md:px-10 lg:px-16',
    full: 'w-full h-full',
    stretch: 'px-3 md:px-10 lg:px-16',
  },
  schema: {
    configs: {
      options: [
        {label: 'Container (Default)', value: 'container'},
        {label: 'Full Screen', value: 'full'},
        {label: 'Stretch', value: 'stretch'},
        {label: 'Fixed', value: 'fixed'},
      ],
    },
    defaultValue: 'container',
    label: 'Content width',
    name: 'width',
    type: 'select',
  } as BasicInput,
};

export const layout = {
  contentPosition,
  gap,
  size,
  verticalPadding,
  width,
};
