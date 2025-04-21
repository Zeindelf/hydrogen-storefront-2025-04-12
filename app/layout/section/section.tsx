import type {InspectorGroup} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';
import type {ComponentPropsWithout, RemovedProps} from 'types/props/component';

import {Slot} from '@radix-ui/react-slot';
import {cva} from 'class-variance-authority';
import * as React from 'react';

import {cn} from '~/utils/helpers';

import {layout} from '../theme/layout';

export const DEFAULT_TAG = 'section' as const;

export const sectionElements = [
  'aside',
  'footer',
  'header',
  'section',
  'article',
  'div',
  'span',
] as const;

export type SectionVariantsProps = VariantProps<typeof sectionVariants>;

const sectionVariants = cva('relative', {
  defaultVariants: {
    overflow: 'hidden',
  },
  variants: {
    gap: layout.gap.options,
    layout: {
      account: 'flex flex-col max-md:space-y-8 lg:flex-row',
      breadcrumb: 'border-t py-5 lg:py-6',
      page: 'max-w-screen-md py-5 !pt-0 lg:py-8 xl:px-5',
      product: 'relative flex flex-col gap-4 lg:flex-row',
      'product-grid': 'grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4',
    },
    overflow: {
      hidden: 'overflow-hidden',
      unset: '',
    },
    verticalPadding: layout.verticalPadding.options,
    width: layout.width.options,
  },
});

type SectionElement = React.ElementRef<typeof DEFAULT_TAG>;

export interface SectionProps
  extends ComponentPropsWithout<typeof DEFAULT_TAG, RemovedProps>,
    SectionVariantsProps {
  as?: (typeof sectionElements)[number];
  asChild?: boolean;
}

export const SectionBase = React.forwardRef<SectionElement, SectionProps>(
  ({...props}, ref) => {
    return <Slot ref={ref} {...props} />;
  },
);

export const Section = React.forwardRef<SectionElement, SectionProps>(
  (
    {
      as: Tag = DEFAULT_TAG,
      asChild,
      children,
      className,
      gap,
      layout,
      overflow,
      verticalPadding,
      width,
      ...props
    },
    ref,
  ) => {
    return (
      <SectionBase
        className={cn(
          sectionVariants({
            className,
            gap,
            layout,
            overflow,
            verticalPadding,
            width,
          }),
        )}
        ref={ref}
        {...props}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </SectionBase>
    );
  },
);

export const layoutInputs: InspectorGroup['inputs'] = [
  {...layout.gap.schema},
  {...layout.verticalPadding.schema},
  {...layout.width.schema},
];

export const sectionInspector: InspectorGroup[] = [
  {group: 'Layout', inputs: layoutInputs},
];
