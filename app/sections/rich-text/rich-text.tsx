import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';

import * as React from 'react';

type RichTextData = {
  backgroundColor: string;
  paddingBottom: number;
  paddingTop: number;
  textPosition: string;
  // More type definitions...
};

type RichTextProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  RichTextData;

const RichText = React.forwardRef<HTMLElement, RichTextProps>(
  (
    {
      backgroundColor,
      children,
      paddingBottom,
      paddingTop,
      textPosition,
      ...props
    },
    ref,
  ) => {
    // More component logic...
    const style = {
      alignItems: textPosition,
      backgroundColor,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: textPosition,
      paddingBottom,
      paddingTop,
    } as React.CSSProperties;

    return (
      <section ref={ref} style={style} {...props}>
        {children}
      </section>
    );
  },
);

export default RichText;

export const loader = async (_: ComponentLoaderArgs<RichTextData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export const schema: HydrogenComponentSchema = {
  // More schema definitions...
  childTypes: ['heading', 'paragraph'],
  inspector: [
    {
      group: 'Rich Text',
      inputs: [
        {
          configs: {
            options: [
              {label: 'Left', value: 'flex-start'},
              {label: 'Center', value: 'center'},
              {label: 'Right', value: 'flex-end'},
            ],
          },
          defaultValue: 'center',
          label: 'Text position',
          name: 'textPosition',
          type: 'toggle-group',
        },
        {
          configs: {
            max: 300,
            min: 0,
            step: 1,
            unit: 'px',
          },
          defaultValue: 40,
          label: 'Padding Top',
          name: 'paddingTop',
          type: 'range',
        },
        {
          configs: {
            max: 300,
            min: 0,
            step: 1,
            unit: 'px',
          },
          defaultValue: 40,
          label: 'Padding Bottom',
          name: 'paddingBottom',
          type: 'range',
        },
        {
          defaultValue: '#ffffff',
          label: 'Background color',
          name: 'backgroundColor',
          type: 'color',
        },
      ],
    },
  ],
  presets: {
    children: [
      {
        content: 'Talk about your brand',
        type: 'heading',
      },
      {
        content:
          'Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.',
        type: 'description',
      },
    ],
  },
  title: 'Rich Text',
  type: 'rich-text',
};
