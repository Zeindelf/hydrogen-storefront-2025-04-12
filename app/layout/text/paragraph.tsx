import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
  InspectorGroup,
} from '@weaverse/hydrogen';

import * as React from 'react';

import {cn} from '~/utils/helpers';

import {text} from '../theme/text';
import {typographyVariants} from '../theme/typography';
import {DEFAULT_TAG, TextBase, type TextProps} from './text';

export interface ParagraphProps
  extends Omit<TextProps, 'children'>,
    Partial<HydrogenComponentProps> {
  color?: string;
  content: string;
}

const Paragraph = React.forwardRef<
  HTMLDivElement | HTMLParagraphElement,
  ParagraphProps
>(
  (
    {
      alignment,
      as: Tag = DEFAULT_TAG,
      className,
      color,
      content,
      letterSpacing,
      lineHeight,
      size,
      weight,
      ...props
    },
    ref,
  ) => {
    return (
      <TextBase
        asChild
        className={cn(
          typographyVariants({
            alignment,
            className,
            letterSpacing,
            lineHeight,
            size,
            weight,
          }),
        )}
        ref={ref}
        style={{color}}
        {...props}
      >
        <Tag>{content}</Tag>
      </TextBase>
    );
  },
);

export default Paragraph;

const placeholder =
  "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.";

export const textInputs: InspectorGroup['inputs'] = [
  {
    defaultValue: placeholder,
    label: 'Content',
    name: 'content',
    placeholder,
    type: 'textarea',
  },
  {label: 'Text color', name: 'color', type: 'color'},
  {...text.size.schema},
  {...text.alignment.schema},
  {...text.letterSpacing.schema},
  {...text.lineHeight.schema},
  {...text.weight.schema},
];

export const schema: HydrogenComponentSchema = {
  inspector: [
    {
      group: 'Paragraph',
      inputs: textInputs,
    },
  ],
  title: 'Paragraph',
  type: 'paragraph',
};
