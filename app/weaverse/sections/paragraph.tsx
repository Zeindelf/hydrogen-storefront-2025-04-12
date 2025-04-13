import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';
import {forwardRef} from 'react';

import {cn} from '~/utils/helpers';

export interface ParagraphProps
  extends Partial<HydrogenComponentProps>,
    VariantProps<typeof variants> {
  as?: 'div' | 'p';
  color?: string;
  content: string;
}

const variants = cva('paragraph', {
  defaultVariants: {
    textSize: 'base',
    width: 'full',
  },
  variants: {
    alignment: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },
    textSize: {
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
      base: '',
      lg: 'text-lg',
      sm: 'text-sm',
      xl: 'text-xl',
      xs: 'text-xs',
    },
    width: {
      full: 'w-full mx-auto',
      narrow: 'w-full md:w-1/2 lg:w-3/4 max-w-4xl mx-auto',
    },
  },
});

const Paragraph = forwardRef<
  HTMLDivElement | HTMLParagraphElement,
  ParagraphProps
>((props, ref) => {
  const {
    alignment,
    as: Tag = 'p',
    className,
    color,
    content,
    textSize,
    width,
    ...rest
  } = props;
  return (
    <Tag
      data-motion="fade-up"
      ref={ref}
      {...rest}
      className={cn(variants({alignment, className, textSize, width}))}
      dangerouslySetInnerHTML={{__html: content}}
      style={{color}}
      suppressHydrationWarning
    />
  );
});

export default Paragraph;

export const schema: HydrogenComponentSchema = {
  inspector: [
    {
      group: 'Paragraph',
      inputs: [
        {
          defaultValue:
            "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.",
          label: 'Content',
          name: 'content',
          placeholder:
            "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.",
          type: 'richtext',
        },
        {
          configs: {
            options: [
              {label: '<p> (Paragraph)', value: 'p'},
              {label: '<div> (Div)', value: 'div'},
            ],
          },
          defaultValue: 'p',
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
          defaultValue: 'base',
          label: 'Text size',
          name: 'textSize',
          type: 'select',
        },
        {
          configs: {
            options: [
              {icon: 'move-horizontal', label: 'Full', value: 'full'},
              {
                icon: 'fold-horizontal',
                label: 'Narrow',
                value: 'narrow',
              },
            ],
          },
          defaultValue: 'narrow',
          label: 'Width',
          name: 'width',
          type: 'toggle-group',
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
      ],
    },
  ],
  title: 'Paragraph',
  type: 'paragraph',
};
