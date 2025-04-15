import type {BasicInput} from '@weaverse/hydrogen';

const size = {
  options: {
    100: 'w-full',
    25: 'w-1/4',
    50: 'w-1/2',
    75: 'w-3/4',
  },
  schema: {
    configs: {
      max: 100,
      min: 25,
      step: 25,
      unit: '%',
    },
    defaultValue: 100,
    label: 'Width',
    name: 'width',
    type: 'range',
  } as BasicInput,
};

export const width = {
  size,
};
