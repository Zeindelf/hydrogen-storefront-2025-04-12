import type {BasicInput} from '@weaverse/hydrogen';

const size = {
  options: {
    default: 'h-9 px-4 py-2 text-sm md:text-base',
    icon: 'size-9',
    lg: 'h-10 px-8',
    sm: 'h-8 px-3 text-sm',
    xs: 'h-7 px-2 text-xs',
  },
  schema: {
    configs: {
      options: [
        {label: 'Default', value: 'default'},
        {label: 'Extra Small', value: 'xs'},
        {label: 'Small', value: 'sm'},
        {label: 'Large', value: 'lg'},
      ],
    },
    label: 'Size',
    name: 'size',
    type: 'select',
  } as BasicInput,
};

const variant = {
  options: {
    custom:
      'border px-4 py-3 text-[--btn-text] bg-[--btn-bg] border-[--btn-border] hover:text-[--btn-text-hover] hover:bg-[--btn-bg-hover] hover:border-[--btn-border-hover]',
    default: 'bg-primary text-white shadow hover:bg-primary/75',
    destructive:
      'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
    outline:
      'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
    secondary:
      'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
  },
  schema: {
    configs: {
      options: [
        {label: 'Default', value: 'default'},
        {label: 'Secondary', value: 'secondary'},
        {label: 'Outline', value: 'outline'},
        {label: 'Ghost', value: 'ghost'},
        {label: 'Link', value: 'link'},
        {label: 'Destructive', value: 'destructive'},
        {label: 'Custom', value: 'custom'},
      ],
    },
    label: 'Variant',
    name: 'variant',
    type: 'select',
  } as BasicInput,
};

export const button = {
  size,
  variant,
};
