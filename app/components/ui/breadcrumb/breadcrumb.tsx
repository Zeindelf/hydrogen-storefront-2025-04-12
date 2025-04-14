import * as React from 'react';

import {cn} from '~/utils/helpers';

import type {LinkProps as UILinkProps} from '../link';

import {Icons} from '../icons';
import {Link as UILink} from '../link';

export const Root = React.forwardRef<
  HTMLElement,
  {
    separator?: React.ReactNode;
  } & React.ComponentPropsWithoutRef<'nav'>
>(({...props}, ref) => <nav aria-label="breadcrumb" ref={ref} {...props} />);
Root.displayName = 'Breadcrumb';

export const List = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({className, ...props}, ref) => (
  <ol
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
      className,
    )}
    ref={ref}
    {...props}
  />
));
List.displayName = 'BreadcrumbList';

export const Item = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({className, ...props}, ref) => (
  <li
    className={cn('inline-flex items-center gap-1.5', className)}
    ref={ref}
    {...props}
  />
));
Item.displayName = 'BreadcrumbItem';

export const Link = React.forwardRef<HTMLAnchorElement, UILinkProps>(
  ({className, ...props}, ref) => (
    <UILink
      className={cn('transition-colors hover:text-foreground', className)}
      ref={ref}
      {...props}
    />
  ),
);
Link.displayName = 'BreadcrumbLink';

export const Page = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({className, ...props}, ref) => (
  <span
    aria-current="page"
    aria-disabled="true"
    className={cn('font-medium text-primary', className)}
    ref={ref}
    role="link"
    {...props}
  />
));
Page.displayName = 'BreadcrumbPage';

export const Separator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    aria-hidden="true"
    className={cn('[&>svg]:size-3.5', className)}
    role="presentation"
    {...props}
  >
    {children ?? <Icons.Lucide.ChevronRight />}
  </li>
);
Separator.displayName = 'BreadcrumbSeparator';

export const Ellipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    role="presentation"
    {...props}
  >
    <Icons.Lucide.Ellipsis className="size-4" />
    <span className="sr-only">More</span>
  </span>
);
Ellipsis.displayName = 'BreadcrumbElipssis';
