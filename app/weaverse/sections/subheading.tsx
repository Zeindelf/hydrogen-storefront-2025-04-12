import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';
import {forwardRef} from 'react';

import {cn} from '~/utils/helpers';

const variants = cva('subheading', {
  defaultVariants: {
    alignment: 'center',
    size: 'base',
    weight: 'normal',
  },
  variants: {
    alignment: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },
    size: {
      base: 'text-base',
      large: 'text-lg',
    },
    weight: {
      medium: 'font-medium',
      normal: 'font-normal',
    },
  },
});

interface SubHeadingProps
  extends HydrogenComponentProps,
    VariantProps<typeof variants> {
  as?: 'div' | 'h4' | 'h5' | 'h6' | 'p';
  color?: string;
  content: string;
}

const SubHeading = forwardRef<
  HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement,
  SubHeadingProps
>((props, ref) => {
  const {
    alignment,
    as: Tag = 'p',
    className,
    color,
    content,
    size,
    weight,
    ...rest
  } = props;
  return (
    <Tag
      ref={ref}
      {...rest}
      className={cn(variants({alignment, className, size, weight}))}
      data-motion="fade-up"
      style={{color}}
    >
      {content}
    </Tag>
  );
});

export default SubHeading;

export const schema: HydrogenComponentSchema = {
  inspector: [
    {
      group: 'Subheading',
      inputs: [
        {
          configs: {
            options: [
              {label: 'Heading 4', value: 'h4'},
              {label: 'Heading 5', value: 'h5'},
              {label: 'Heading 6', value: 'h6'},
              {label: 'Paragraph', value: 'p'},
              {label: 'Div', value: 'div'},
            ],
          },
          defaultValue: 'p',
          label: 'Tag name',
          name: 'as',
          type: 'select',
        },
        {
          defaultValue: 'Section subheading',
          label: 'Content',
          name: 'content',
          placeholder: 'Section subheading',
          type: 'text',
        },
        {
          label: 'Text color',
          name: 'color',
          type: 'color',
        },
        {
          configs: {
            options: [
              {label: 'Base', value: 'base'},
              {label: 'Large', value: 'large'},
            ],
          },
          defaultValue: 'base',
          label: 'Text size',
          name: 'size',
          type: 'select',
        },
        {
          configs: {
            options: [
              {label: 'Normal', value: 'normal'},
              {label: 'Medium', value: 'medium'},
            ],
          },
          defaultValue: 'normal',
          label: 'Weight',
          name: 'weight',
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
      ],
    },
  ],
  title: 'Subheading',
  type: 'subheading',
};
