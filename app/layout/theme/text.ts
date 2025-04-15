import type {BasicInput} from '@weaverse/hydrogen';

export const defaultTextSize = {
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
  default: 'text-base',
  lg: 'text-lg',
  sm: 'text-sm',
  xl: 'text-xl',
  xs: 'text-xs',
};

export const desktopTextSize = {
  '2xl': 'md:text-2xl',
  '3xl': 'md:text-3xl',
  '4xl': 'md:text-4xl',
  '5xl': 'md:text-5xl',
  '6xl': 'md:text-6xl',
  '7xl': 'md:text-7xl',
  '8xl': 'md:text-8xl',
  '9xl': 'md:text-9xl',
  default: 'md:text-base',
  lg: 'md:text-lg',
  sm: 'md:text-sm',
  xl: 'md:text-xl',
  xs: 'md:text-xs',
};

const sizeSchemaOptions: BasicInput = {
  configs: {
    options: [
      {label: 'Extra small (text-xs)', value: 'xs'},
      {label: 'Small (text-sm)', value: 'sm'},
      {label: 'Base (text-base)', value: 'default'},
      {label: 'Large (text-lg)', value: 'lg'},
      {label: 'Extra large (text-xl)', value: 'xl'},
      {label: '2x large (text-2xl)', value: '2xl'},
      {label: '3x large (text-3xl)', value: '3xl'},
      {label: '4x large (text-4xl)', value: '4xl'},
      {label: '5x large (text-5xl)', value: '5xl'},
      {label: '6x large (text-6xl)', value: '6xl'},
      {label: '7x large (text-7xl)', value: '7xl'},
      {label: '8x large (text-8xl)', value: '8xl'},
      {label: '9x large (text-9xl)', value: '9xl'},
    ],
  },
  defaultValue: 'default',
  label: 'Text size',
  name: 'size',
  type: 'select',
};

const size = {
  options: defaultTextSize,
  schema: sizeSchemaOptions,
};

const alignment = {
  options: {
    center: 'text-center',
    default: '',
    left: 'text-left',
    right: 'text-right',
  },
  schema: {
    configs: {
      options: [
        {icon: 'align-start-vertical', label: 'Left', value: 'left'},
        {icon: 'align-center-vertical', label: 'Center', value: 'center'},
        {icon: 'align-end-vertical', label: 'Right', value: 'right'},
      ],
    },
    defaultValue: 'default',
    label: 'Text alignment',
    name: 'alignment',
    type: 'toggle-group',
  } as BasicInput,
};

const letterSpacing = {
  options: {
    default: 'tracking-normal',
    tight: 'tracking-tight',
    tighter: 'tracking-tighter',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest',
  },
  schema: {
    configs: {
      options: [
        {label: 'Tighter (-0.05em)', value: 'tighter'},
        {label: 'Tight (-0.025em)', value: 'tight'},
        {label: 'Normal (Inherit)', value: 'default'},
        {label: 'Wide (0.025em)', value: 'wide'},
        {label: 'Wider (0.05em)', value: 'wider'},
        {label: 'Widest (0.1em)', value: 'widest'},
      ],
    },
    defaultValue: 'default',
    label: 'Letter spacing',
    name: 'letterSpacing',
    type: 'select',
  } as BasicInput,
};

const lineHeight = {
  options: {
    default: 'leading-normal',
    loose: 'leading-loose',
    none: 'leading-none',
    relaxed: 'leading-relaxed',
    snug: 'leading-snug',
    tight: 'leading-tight',
  },
  schema: {
    configs: {
      options: [
        {label: 'None', value: 'none'},
        {label: 'Tight', value: 'tight'},
        {label: 'Snug', value: 'snug'},
        {label: 'Normal (Inherit)', value: 'default'},
        {label: 'Relaxed', value: 'relaxed'},
        {label: 'Loose', value: 'loose'},
      ],
    },
    defaultValue: 'default',
    label: 'Line height',
    name: 'lineHeight',
    type: 'select',
  } as BasicInput,
};

const weight = {
  options: {
    black: 'font-black',
    bold: 'font-bold',
    default: 'font-normal',
    extrabold: 'font-extrabold',
    extralight: 'font-extralight',
    light: 'font-light',
    medium: 'font-medium',
    semibold: 'font-semibold',
    thin: 'font-thin',
  },
  schema: {
    configs: {
      options: [
        {label: '100 - Thin', value: 'thin'},
        {label: '200 - Extra Light', value: 'extralight'},
        {label: '300 - Light', value: 'light'},
        {label: '400 - Normal', value: 'default'},
        {label: '500 - Medium', value: 'medium'},
        {label: '600 - Semi Bold', value: 'semibold'},
        {label: '700 - Bold', value: 'bold'},
        {label: '800 - Extra Bold', value: 'extrabold'},
        {label: '900 - Black', value: 'black'},
      ],
    },
    defaultValue: 'default',
    label: 'Weight',
    name: 'weight',
    type: 'select',
  } as BasicInput,
};

export const text = {
  alignment,
  letterSpacing,
  lineHeight,
  size,
  weight,
};
