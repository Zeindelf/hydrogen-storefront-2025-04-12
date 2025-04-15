import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';

import {text} from '../theme/text';

export type TypographyVariantsProps = VariantProps<typeof typographyVariants>;

export const typographyVariants = cva('', {
  defaultVariants: {
    textSize: 'default',
  },
  variants: {
    alignment: text.alignment.options,
    letterSpacing: text.letterSpacing.options,
    lineHeight: text.lineHeight.options,
    textSize: text.size.options,
    weight: text.weight.options,
  },
});
