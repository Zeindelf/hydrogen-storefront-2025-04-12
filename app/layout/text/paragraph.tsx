import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';

import * as React from 'react';

import {cn} from '~/utils/helpers';

import type {TextProps} from './text';

import {text} from '../theme/text';
import {typographyVariants} from './typography';

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
      className,
      color,
      content,
      letterSpacing,
      lineHeight,
      textSize,
      weight,
    },
    ref,
  ) => {
    return (
      <p
        className={cn(
          typographyVariants({
            alignment,
            className,
            letterSpacing,
            lineHeight,
            textSize,
            weight,
          }),
        )}
        dangerouslySetInnerHTML={{__html: content}}
        ref={ref}
        style={{color}}
      />
    );
  },
);

export default Paragraph;

const placeholder =
  "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.";

export const schema: HydrogenComponentSchema = {
  inspector: [
    {
      group: 'Paragraph',
      inputs: [
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
      ],
    },
    {
      group: 'Paragraph Position',
      inputs: [
        {
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
        },
      ],
    },
  ],
  title: 'Paragraph',
  type: 'paragraph',
};
