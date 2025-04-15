import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';

export type OverlayVariantsProps = VariantProps<typeof overlayVariants>;
export const overlayVariants = cva(
  'z-50 fixed inset-0 bg-foreground/25 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  {
    defaultVariants: {},
    variants: {},
  },
);
