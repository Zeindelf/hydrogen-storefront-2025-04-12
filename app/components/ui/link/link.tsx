import type {
  LinkProps as RemixLinkProps,
  NavLinkProps as RemixNavLinkProps,
} from '@remix-run/react';

import {Link as RemixLink, NavLink as RemixNavLink} from '@remix-run/react';
import * as React from 'react';

import {cn, externalRel} from '~/utils/helpers';

import {Icons} from '../icons';

type BaseLinkProps = {
  className?: RemixLinkProps['className'] | RemixNavLinkProps['className'];
} & Omit<RemixLinkProps, 'className'>;

export interface LinkProps extends BaseLinkProps {
  ariaLabel: string;
  as?: 'Link' | 'NavLink';
  children: React.ReactNode;
  isExternal?: boolean;
  isLoading?: boolean;
  role?: string;
  title?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      ariaLabel,
      as = 'Link',
      children,
      className,
      isExternal = false,
      isLoading,
      role,
      title,
      to,
      ...props
    },
    ref,
  ) => {
    const Comp = as === 'NavLink' ? RemixNavLink : RemixLink;

    return (
      <Comp
        aria-label={ariaLabel}
        className={cn(
          'aria-[current=page]:border-b aria-[current=page]:font-bold',
          className,
        )}
        ref={ref}
        role={role}
        title={title || ariaLabel || 'Anchor link'}
        to={to}
        {...(isExternal && externalRel)}
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
          <>{children}</>
        )}
      </Comp>
    );
  },
);

Link.displayName = 'Link';
