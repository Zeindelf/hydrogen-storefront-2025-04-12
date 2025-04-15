import type {VariantProps} from 'class-variance-authority';

import {Slot} from '@radix-ui/react-slot';
import {cva} from 'class-variance-authority';
import * as React from 'react';

import {cn} from '~/utils/helpers';

export type BadgeVariantsProps = VariantProps<typeof badgeVariants>;
export const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      size: {
        icon: 'size-4 p-1',
      },
      variant: {
        counter:
          'flex size-5 items-center justify-center rounded-full bg-primary p-0 text-xs text-white',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'border-primary font-medium text-primary',
        primary:
          'border-transparent bg-primary text-white shadow hover:bg-primary/80',
        rounded: 'h-7 rounded-full px-4 font-normal',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
    },
  },
);

export interface BadgeProps
  extends BadgeVariantsProps,
    React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({asChild = false, className, size, variant, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        className={cn(badgeVariants({size, variant}), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
