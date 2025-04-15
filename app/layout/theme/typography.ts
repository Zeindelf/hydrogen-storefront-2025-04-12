import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';

import {defaultTextSize, desktopTextSize, text} from '../theme/text';

export type TypographyVariantsProps = VariantProps<typeof typographyVariants>;

export const typographyVariants = cva('', {
  defaultVariants: {
    size: 'default',
  },
  variants: {
    alignment: text.alignment.options,
    letterSpacing: text.letterSpacing.options,
    lineHeight: text.lineHeight.options,
    size: text.size.options,
    weight: text.weight.options,
  },
});

export type FontSizeVariantsProps = VariantProps<typeof fontSizeVariants>;

export const fontSizeVariants = cva('', {
  variants: {
    desktopSize: desktopTextSize,
    mobileSize: defaultTextSize,
  },
});
