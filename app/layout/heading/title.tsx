import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
  InspectorGroup,
} from '@weaverse/hydrogen';

import * as React from 'react';

import {cn} from '~/utils/helpers';

import type {
  FontSizeVariantsProps,
  TypographyVariantsProps,
} from '../theme/typography';
import type {headingElements} from './heading';

import {text} from '../theme/text';
import {fontSizeVariants, typographyVariants} from '../theme/typography';
import {DEFAULT_TAG} from './heading';

export interface HeadingProps
  extends FontSizeVariantsProps,
    TypographyVariantsProps {
  as?: (typeof headingElements)[number];
  color?: string;
  content: string;
}

const Title = React.forwardRef<
  HTMLHeadingElement,
  HeadingProps & Partial<HydrogenComponentProps>
>(
  (
    {
      alignment,
      as: Tag = DEFAULT_TAG,
      className,
      color,
      content,
      desktopSize,
      letterSpacing,
      lineHeight,
      mobileSize,
      size,
      variant,
      weight,
      ...props
    },
    ref,
  ) => {
    const style: React.CSSProperties = {color};

    return (
      <Tag
        className={cn(
          typographyVariants({
            alignment,
            className,
            letterSpacing,
            lineHeight,
            size,
            variant,
            weight,
          }),
          fontSizeVariants({desktopSize, mobileSize}),
        )}
        ref={ref}
        style={style}
        {...props}
      >
        {content}
      </Tag>
    );
  },
);

const placeholder = 'Section Heading';

export default Title;

export const headingInputs: InspectorGroup['inputs'] = [
  {
    defaultValue: placeholder,
    label: 'Content',
    name: 'content',
    placeholder,
    type: 'text',
  },
  {
    configs: {
      options: [
        {label: 'Heading 2', value: 'h2'},
        {label: 'Heading 3', value: 'h3'},
        {label: 'Heading 4', value: 'h4'},
        {label: 'Heading 5', value: 'h5'},
        {label: 'Heading 6', value: 'h6'},
      ],
    },
    defaultValue: 'h2',
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
        {label: 'Pre defined', value: 'predefined'},
        {label: 'Custom', value: 'custom'},
      ],
    },
    defaultValue: 'default',
    label: 'Text size',
    name: 'size',
    type: 'select',
  },
  {
    condition: 'size.eq.predefined',
    ...text.variant.schema,
  },
  {
    condition: 'size.eq.custom',
    configs: text.size.schema.configs,
    defaultValue: '3xl',
    label: 'Mobile text size',
    name: 'mobileSize',
    type: 'select',
  },
  {
    condition: 'size.eq.custom',
    configs: text.size.schema.configs,
    defaultValue: '5xl',
    label: 'Desktop text size',
    name: 'desktopSize',
    type: 'select',
  },
  {...text.alignment.schema},
  {...text.letterSpacing.schema},
  {...text.lineHeight.schema},
  {...text.weight.schema},
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
