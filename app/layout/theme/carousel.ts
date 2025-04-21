import type {BasicInput} from '@weaverse/hydrogen';

const arrows = {
  options: {
    vertical: 'absolute top-1/2 z-10 -translate-y-1/2',
  },
  schema: {
    configs: {
      options: [
        {label: 'Outside', value: 'outside'},
        {label: 'Inside', value: 'inside'},
      ],
    },
    label: 'Arrows',
    name: 'arrows',
    type: 'select',
  } as BasicInput,
};

const dots = {
  options: {},
  schema: {} as BasicInput,
};

export const carousel = {
  arrows,
  dots,
};
