import type {VariantProps} from 'class-variance-authority';

import {Slot} from '@radix-ui/react-slot';
import {cva} from 'class-variance-authority';
import * as React from 'react';

import {button} from '~/layout/theme/button';
import {cn} from '~/utils/helpers';

import {Icons} from '../icons';

export const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-primary focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: button.size.options,
      variant: button.variant.options,
    },
  },
);

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantsProps {
  ariaLabel: string;
  asChild?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      ariaLabel,
      asChild = false,
      children,
      className,
      disabled,
      isActive,
      isLoading,
      size,
      type = 'button',
      variant,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        aria-busy={isLoading}
        aria-disabled={disabled || isLoading}
        aria-label={ariaLabel || props['aria-label']}
        className={cn(
          buttonVariants({size, variant}),
          isActive && 'bg-black/5 shadow-none border-none !text-black',
          className,
        )}
        disabled={disabled || isLoading}
        ref={ref}
        title={props.title}
        type={type}
        {...props}
      >
        {isLoading ? (
          <>
            <span aria-hidden className="invisible contents">
              {children}
            </span>
            <span className="sr-only">{children}</span>

            <span className="absolute inset-0 flex items-center justify-center">
              <Icons.Loaders.Ellipsis className="size-8" />
            </span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
