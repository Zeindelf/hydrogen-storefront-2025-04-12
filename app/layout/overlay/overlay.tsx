import type {InspectorGroup} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';

export type OverlayVariantsProps = VariantProps<typeof overlayVariants>;
export const overlayVariants = cva(
  'fixed inset-0 z-50 bg-foreground/25 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  {
    defaultVariants: {},
    variants: {},
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
    label: 'Overlay color (hover)',
    name: 'overlayColorHover',
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
