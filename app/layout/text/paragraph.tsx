import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
  InspectorGroup,
} from '@weaverse/hydrogen';

import * as React from 'react';

import {cn} from '~/utils/helpers';

import type {TypographyVariantsProps} from '../theme/typography';

import {text} from '../theme/text';
import {typographyVariants} from '../theme/typography';
import {DEFAULT_TAG} from './text';

export interface ParagraphProps
  extends Partial<HydrogenComponentProps>,
    TypographyVariantsProps {
  as?: 'p' | 'span';
  color?: string;
  content: string;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
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
      <Tag
        className={cn(
          'paragraph select-none',
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
        {content}
      </Tag>
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
