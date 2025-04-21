import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';

import * as React from 'react';

type SpacerProps = {
  addSeparator: boolean;
  backgroundColor: string;
  desktopHeight: number;
  mobileHeight: number;
  separatorColor: string;
} & HydrogenComponentProps;

const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (
    {
      addSeparator,
      backgroundColor,
      desktopHeight,
      mobileHeight,
      separatorColor,
      ...rest
    },
    ref,
  ) => {
    const style = {
      '--desktop-height': `${desktopHeight}px`,
      '--mobile-height': `${mobileHeight}px`,
      '--separator-color': separatorColor,
      backgroundColor,
    } as React.CSSProperties;

    return (
      <div
        className="flex h-[var(--mobile-height)] w-full items-center justify-center md:h-[var(--desktop-height)]"
        ref={ref}
        style={style}
        {...rest}
      >
        {addSeparator && (
          <div className="mx-auto h-px w-3/4 border-t border-[var(--separator-color,var(--color-border))] md:w-2/3" />
        )}
      </div>
    );
  },
);

export default Spacer;

export const schema: HydrogenComponentSchema = {
  inspector: [
    {
      group: 'Spacer',
      inputs: [
        {
          configs: {
            max: 200,
            min: 0,
            step: 1,
            unit: 'px',
          },
          defaultValue: 50,
          helpText: 'Set to 0 to hide the Spacer on mobile devices',
          label: 'Mobile height',
          name: 'mobileHeight',
          type: 'range',
        },
        {
          configs: {
            max: 300,
            min: 0,
            step: 1,
            unit: 'px',
          },
          defaultValue: 100,
          label: 'Desktop height',
          name: 'desktopHeight',
          type: 'range',
        },
        {
          defaultValue: '#00000000',
          label: 'Background color',
          name: 'backgroundColor',
          type: 'color',
        },
        {
          defaultValue: false,
          label: 'Add border separator',
          name: 'addSeparator',
          type: 'switch',
        },
        {
          condition: 'addSeparator.eq.true',
          defaultValue: '#000',
          label: 'Separator color',
          name: 'separatorColor',
          type: 'color',
        },
      ],
    },
  ],
  title: 'Spacer',
  type: 'spacer',
};
