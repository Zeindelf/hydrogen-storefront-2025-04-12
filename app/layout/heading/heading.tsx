import type {ComponentPropsWithout, RemovedProps} from 'types/props/component';

import {Slot} from '@radix-ui/react-slot';
import * as React from 'react';

import {cn} from '~/utils/helpers';

import type {Text} from '../text';
import type {
  FontSizeVariantsProps,
  TypographyVariantsProps,
} from '../theme/typography';

import {fontSizeVariants, typographyVariants} from '../theme/typography';

export const DEFAULT_TAG = 'h2' as const;
export const headingElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

type HeadingElement = React.ElementRef<typeof Text>;

export interface HeadingProps
  extends ComponentPropsWithout<typeof DEFAULT_TAG, RemovedProps>,
    FontSizeVariantsProps,
    TypographyVariantsProps {
  as?: (typeof headingElements)[number];
  asChild?: boolean;
  testId?: string;
}

export const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  (
    {
      alignment,
      as: Tag = DEFAULT_TAG,
      asChild,
      children,
      className,
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
    return (
      <Slot
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
        {...props}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);
