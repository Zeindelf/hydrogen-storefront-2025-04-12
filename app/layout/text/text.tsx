import type {ComponentPropsWithout, RemovedProps} from 'types/props/component';

import {Slot} from '@radix-ui/react-slot';
import * as React from 'react';

import {cn} from '~/utils/helpers';

import type {TypographyVariantsProps} from '../theme/typography';

import {typographyVariants} from '../theme/typography';

export const DEFAULT_TAG = 'p' as const;

export const textElements = [
  'blockquote',
  'dd',
  'div',
  'dt',
  'em',
  'figcaption',
  'figure',
  'p',
  'pre',
  'small',
  'span',
  'strong',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
] as const;

export interface TextProps
  extends ComponentPropsWithout<typeof DEFAULT_TAG, RemovedProps>,
    TypographyVariantsProps {
  as?: (typeof textElements)[number];
  asChild?: boolean;
}

type TextElement = React.ElementRef<typeof DEFAULT_TAG>;

export const Text = React.forwardRef<TextElement, TextProps>(
  (
    {
      alignment,
      as: Tag = DEFAULT_TAG,
      asChild,
      children,
      className,
      letterSpacing,
      lineHeight,
      size,
      weight,
      ...props
    },
    ref,
  ) => (
    <Slot
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
      suppressHydrationWarning
      {...props}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  ),
);
