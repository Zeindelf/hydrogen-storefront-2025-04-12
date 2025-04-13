import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
  InspectorGroup,
} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';
import type {CSSProperties} from 'react';

import {cva} from 'class-variance-authority';
import {forwardRef} from 'react';

import {cn} from '~/utils/cn';

const fontSizeVariants = cva('', {
  variants: {
    desktopSize: {
      '2xl': 'md:text-2xl',
      '3xl': 'md:text-3xl',
      '4xl': 'md:text-4xl',
      '5xl': 'md:text-5xl',
      '6xl': 'md:text-6xl',
      '7xl': 'md:text-7xl',
      '8xl': 'md:text-8xl',
      '9xl': 'md:text-9xl',
      base: 'md:text-base',
      lg: 'md:text-lg',
      sm: 'md:text-sm',
      xl: 'md:text-xl',
      xs: 'md:text-xs',
    },
    mobileSize: {
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
      base: 'text-base',
      lg: 'text-lg',
      sm: 'text-sm',
      xl: 'text-xl',
      xs: 'text-xs',
    },
  },
});

const variants = cva('heading', {
  defaultVariants: {
    alignment: 'center',
    letterSpacing: 'normal',
    size: 'default',
    weight: '400',
  },
  variants: {
    alignment: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },
    letterSpacing: {
      normal: '',
      tight: 'tracking-tight',
      tighter: 'tracking-tighter',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
    size: {
      custom: '',
      default: '',
      scale: 'text-scale',
    },
    weight: {
      '100': 'font-thin',
      '200': 'font-extralight',
      '300': 'font-light',
      '400': 'font-normal',
      '500': 'font-medium',
      '600': 'font-semibold',
      '700': 'font-bold',
      '800': 'font-extrabold',
      '900': 'font-black',
    },
  },
});

export interface HeadingProps
  extends VariantProps<typeof variants>,
    VariantProps<typeof fontSizeVariants> {
  animate?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  backgroundColor?: string;
  color?: string;
  content: string;
  maxSize?: number;
  minSize?: number;
}

const Heading = forwardRef<
  HTMLHeadingElement,
  HeadingProps & Partial<HydrogenComponentProps>
>((props, ref) => {
  const {
    alignment,
    animate = true,
    as: Tag = 'h4',
    backgroundColor,
    className,
    color,
    content,
    desktopSize,
    letterSpacing,
    maxSize,
    minSize,
    mobileSize,
    size,
    weight,
    ...rest
  } = props;
  let style: CSSProperties = {backgroundColor, color};
  if (size === 'scale') {
    style = {
      ...style,
      '--max-size': maxSize,
      '--min-size': minSize,
      '--min-size-px': `${minSize}px`,
    } as CSSProperties;
  }
  if (animate) {
    // @ts-ignore
    rest['data-motion'] = 'fade-up';
  }
  return (
    <Tag
      ref={ref}
      {...rest}
      className={cn(
        size === 'custom' && fontSizeVariants({desktopSize, mobileSize}),
        variants({alignment, className, letterSpacing, size, weight}),
      )}
      style={style}
    >
      {content}
    </Tag>
  );
});

export default Heading;

export const headingInputs: InspectorGroup['inputs'] = [
  {
    defaultValue: 'Section heading',
    label: 'Content',
    name: 'content',
    placeholder: 'Section heading',
    type: 'text',
  },
  {
    configs: {
      options: [
        {label: '<h1> (Heading 1)', value: 'h1'},
        {label: '<h2> (Heading 2)', value: 'h2'},
        {label: '<h3> (Heading 3)', value: 'h3'},
        {label: '<h4> (Heading 4)', value: 'h4'},
        {label: '<h5> (Heading 5)', value: 'h5'},
        {label: '<h6> (Heading 6)', value: 'h6'},
      ],
    },
    defaultValue: 'h4',
    label: 'HTML tag',
    name: 'as',
    type: 'select',
  },
  {
    label: 'Text color',
    name: 'color',
    type: 'color',
  },
  {
    configs: {
      options: [
        {label: 'Default', value: 'default'},
        {label: 'Auto scale', value: 'scale'},
        {label: 'Custom', value: 'custom'},
      ],
    },
    defaultValue: 'default',
    label: 'Text size',
    name: 'size',
    type: 'select',
  },
  {
    condition: 'size.eq.scale',
    configs: {
      max: 32,
      min: 12,
      step: 1,
      unit: 'px',
    },
    defaultValue: 16,
    label: 'Minimum scale size',
    name: 'minSize',
    type: 'range',
  },
  {
    condition: 'size.eq.scale',
    configs: {
      max: 96,
      min: 40,
      step: 1,
      unit: 'px',
    },
    defaultValue: 64,
    helpText:
      'See how scale text works <a href="https://css-tricks.com/snippets/css/fluid-typography/" target="_blank" rel="noreferrer">here</a>.',
    label: 'Maximum scale size',
    name: 'maxSize',
    type: 'range',
  },
  {
    condition: 'size.eq.custom',
    configs: {
      options: [
        {label: 'Extra small (text-xs)', value: 'xs'},
        {label: 'Small (text-sm)', value: 'sm'},
        {label: 'Base (text-base)', value: 'base'},
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
    defaultValue: '3xl',
    label: 'Mobile text size',
    name: 'mobileSize',
    type: 'select',
  },
  {
    condition: 'size.eq.custom',
    configs: {
      options: [
        {label: 'Extra small (text-xs)', value: 'xs'},
        {label: 'Small (text-sm)', value: 'sm'},
        {label: 'Base (text-base)', value: 'base'},
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
    defaultValue: '5xl',
    label: 'Desktop text size',
    name: 'desktopSize',
    type: 'select',
  },
  {
    configs: {
      options: [
        {label: '100 - Thin', value: '100'},
        {label: '200 - Extra Light', value: '200'},
        {label: '300 - Light', value: '300'},
        {label: '400 - Normal', value: '400'},
        {label: '500 - Medium', value: '500'},
        {label: '600 - Semi Bold', value: '600'},
        {label: '700 - Bold', value: '700'},
        {label: '800 - Extra Bold', value: '800'},
        {label: '900 - Black', value: '900'},
      ],
    },
    defaultValue: '400',
    label: 'Weight',
    name: 'weight',
    type: 'select',
  },
  {
    configs: {
      options: [
        {label: 'Tighter (-0.05em)', value: 'tighter'},
        {label: 'Tight (-0.025em)', value: 'tight'},
        {label: 'Normal (Inherit)', value: 'normal'},
        {label: 'Wide (0.025em)', value: 'wide'},
        {label: 'Wider (0.05em)', value: 'wider'},
        {label: 'Widest (0.1em)', value: 'widest'},
      ],
    },
    defaultValue: 'normal',
    label: 'Letter spacing',
    name: 'letterSpacing',
    type: 'select',
  },
  {
    configs: {
      options: [
        {icon: 'align-start-vertical', label: 'Left', value: 'left'},
        {
          icon: 'align-center-vertical',
          label: 'Center',
          value: 'center',
        },
        {icon: 'align-end-vertical', label: 'Right', value: 'right'},
      ],
    },
    defaultValue: 'center',
    label: 'Alignment',
    name: 'alignment',
    type: 'toggle-group',
  },
];

export const schema: HydrogenComponentSchema = {
  inspector: [
    {
      group: 'Heading',
      inputs: headingInputs,
    },
  ],
  title: 'Heading',
  type: 'heading',
};
