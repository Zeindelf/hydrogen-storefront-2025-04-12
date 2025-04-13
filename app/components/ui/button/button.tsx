import type {VariantProps} from 'class-variance-authority';

import {Slot} from '@radix-ui/react-slot';
import {cva} from 'class-variance-authority';
import * as React from 'react';

import {cn} from '~/utils/helpers';

import {Icons} from '../icons';

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(
  'inline-flex gap-2 items-center justify-center relative whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-primary focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-9 px-4 py-2 text-sm md:text-base',
        icon: 'h-9 w-9',
        lg: 'h-10 px-8',
        sm: 'h-8 px-3 text-sm',
        xs: 'h-7 px-2 text-xs',
      },
      variant: {
        default: 'bg-primary text-white shadow hover:bg-primary/75',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      },
    },
  },
);

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
            <span aria-hidden className="contents invisible">
              {children}
            </span>
            <span className="sr-only">{children}</span>

            <span className="flex items-center justify-center absolute inset-0">
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
