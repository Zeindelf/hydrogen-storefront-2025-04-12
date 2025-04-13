import type {VariantProps} from 'class-variance-authority';

import {
  Link as RemixLink,
  type LinkProps as RemixLinkProps,
  NavLink as RemixNavLink,
  type NavLinkProps as RemixNavLinkProps,
} from '@remix-run/react';
import {cva} from 'class-variance-authority';
import * as React from 'react';

import {cn, externalRel} from '~/utils/helpers';

import {Icons} from '../icons';

export type LinkVariantsProps = VariantProps<typeof linkVariants>;
export const linkVariants = cva(
  ['aria-[current=page]:border-b aria-[current=page]:font-bold'],
  {
    variants: {
      variant: {
        primary: 'underline font-medium text-primary',
      },
    },
  },
);

export interface LinkProps extends BaseLinkProps, LinkVariantsProps {
  ariaLabel: string;
  as?: 'Link' | 'NavLink';
  children: React.ReactNode;
  decorated?: boolean;
  isExternal?: boolean;
  isLoading?: boolean;
  role?: string;
  title?: string;
}

type BaseLinkProps = {
  className?: RemixLinkProps['className'] | RemixNavLinkProps['className'];
} & Omit<RemixLinkProps, 'className'>;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      ariaLabel,
      as = 'Link',
      children,
      className,
      decorated,
      isExternal = false,
      isLoading,
      role,
      title,
      to,
      variant,
      ...props
    },
    ref,
  ) => {
    const Comp = as === 'NavLink' ? RemixNavLink : RemixLink;

    return (
      <Comp
        aria-label={ariaLabel}
        className={cn(linkVariants({className, variant}))}
        ref={ref}
        role={role}
        title={title || ariaLabel || 'Anchor link'}
        to={to}
        {...(isExternal && externalRel)}
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
          <>
            {decorated ? (
              <span
                className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_3px]
              group-hover:bg-[length:100%_10px]
              dark:from-primary/90 dark:to-primary"
              >
                {children}
              </span>
            ) : (
              <>{children}</>
            )}
          </>
        )}
      </Comp>
    );
  },
);

Link.displayName = 'Link';
