import type {InspectorGroup} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';
import * as React from 'react';

import {cn} from '~/utils/helpers';

export const overlayVariants = cva('', {
  defaultVariants: {},
  variants: {
    variant: {
      glass:
        'fixed inset-0 z-50 bg-foreground/25 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    },
  },
});

export type OverlayVariantsProps = VariantProps<typeof overlayVariants>;

export type OverlayProps = {
  className?: string;
  enableOverlay: boolean;
  overlayColor: string;
  overlayOpacity: number;
};

export const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  ({className, enableOverlay, overlayColor, overlayOpacity}, ref) => {
    const style = {
      '--overlay-color': overlayColor,
      margin: 0,
      opacity: overlayOpacity / 100,
    } as React.CSSProperties;

    if (!enableOverlay) return null;

    return (
      <div
        className={cn(
          'absolute inset-0 z-1 transition-colors duration-300',
          'bg-[var(--overlay-color)]',
          className,
        )}
        ref={ref}
        style={style}
      />
    );
  },
);

export const overlayInputs: InspectorGroup['inputs'] = [
  {
    defaultValue: false,
    label: 'Enable overlay',
    name: 'enableOverlay',
    type: 'switch',
  },
  {
    condition: 'enableOverlay.eq.true',
    defaultValue: '#000000',
    label: 'Overlay color',
    name: 'overlayColor',
    type: 'color',
  },
  {
    condition: 'enableOverlay.eq.true',
    configs: {
      max: 100,
      min: 0,
      step: 1,
      unit: '%',
    },
    defaultValue: 50,
    label: 'Overlay opacity',
    name: 'overlayOpacity',
    type: 'range',
  },
];

export const overlayInspector: InspectorGroup[] = [
  {group: 'Overlay', inputs: overlayInputs},
];
