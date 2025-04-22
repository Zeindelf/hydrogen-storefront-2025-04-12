import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
  InspectorGroup,
} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import * as React from 'react';

import {Carousel} from '~/components/ui/carousel';
import {Section} from '~/layout/section';
import {cn} from '~/utils/helpers';

const slideshowDotsVariants = cva(
  'absolute z-1 flex !w-auto items-center justify-center gap-4 px-2.5',
  {
    defaultVariants: {
      dotsPosition: 'bottom',
    },
    variants: {
      dotsPosition: {
        bottom: '!inset-x-0 !bottom-0 !top-auto',
        left: '!inset-y-0 !left-5 !right-auto flex-col',
        right: '!inset-y-0 !left-auto !right-5 flex-col',
        top: '!inset-x-0 !bottom-auto !top-0',
      },
    },
  },
);

export type SlideshowDotsVariants = VariantProps<typeof slideshowDotsVariants>;

export interface SlideshowDotsProps extends SlideshowDotsVariants {
  className?: string;
}

export function Dots({className, dotsPosition}: SlideshowDotsProps) {
  return (
    <Carousel.Dots
      className={cn(slideshowDotsVariants({className, dotsPosition}))}
    />
  );
}

export interface SlideshowProps
  extends HydrogenComponentProps,
    SlideshowDotsVariants {
  autoplay: boolean;
  effect?: 'fade' | 'slide';
  loop: boolean;
  showArrows: boolean;
  showDots: boolean;
}

const Slideshow = React.forwardRef<HTMLDivElement, SlideshowProps>(
  (
    {
      autoplay,
      children = [],
      className,
      dotsPosition,
      effect,
      loop,
      showArrows,
      showDots,
      ...props
    },
    ref,
  ) => {
    const plugins = React.useMemo(() => {
      const arrPlugins = [];

      if (autoplay) arrPlugins.push(Autoplay());
      if (effect === 'fade') arrPlugins.push(Fade());
      return arrPlugins;
    }, [autoplay, effect]);

    return (
      <Section className={cn('group h-full', className)} ref={ref} {...props}>
        <Carousel.Root opts={{loop}} plugins={plugins}>
          {showArrows && (
            <Carousel.Previous
              ariaLabel="Imagem anterior"
              className="left-4 max-md:left-2"
              placement="vertical"
            />
          )}

          <Carousel.Content className="ml-0">
            {React.Children.map(children, (child) => (
              <Carousel.Item className="overflow-hidden pl-0" key={child.key}>
                {React.cloneElement(child, {})}
              </Carousel.Item>
            ))}
          </Carousel.Content>

          {showArrows && (
            <Carousel.Next
              ariaLabel="Próxima imagem"
              className="right-4 max-md:right-2"
              placement="vertical"
            />
          )}

          {showDots && <Dots dotsPosition={dotsPosition} />}
        </Carousel.Root>
      </Section>
    );
  },
);

export default Slideshow;

export const slideshowInputs: InspectorGroup['inputs'] = [
  {
    configs: {
      options: [
        {label: 'Fade', value: 'fade'},
        {label: 'Slide', value: 'slide'},
      ],
    },
    defaultValue: 'fade',
    label: 'Slide effect',
    name: 'effect',
    type: 'toggle-group',
  },
  {
    defaultValue: true,
    label: 'Loop',
    name: 'loop',
    type: 'switch',
  },
  {
    defaultValue: false,
    label: 'Autoplay',
    name: 'autoplay',
    type: 'switch',
  },
];

export const controlsInputs: InspectorGroup['inputs'] = [
  {
    label: 'Arrows',
    type: 'heading',
  },
  {
    defaultValue: true,
    label: 'Show arrows',
    name: 'showArrows',
    type: 'switch',
  },
  {
    label: 'Dots',
    type: 'heading',
  },
  {
    defaultValue: true,
    label: 'Show dots',
    name: 'showDots',
    type: 'switch',
  },
  {
    condition: 'showDots.eq.true',
    configs: {
      options: [
        {label: 'Top', value: 'top'},
        {label: 'Bottom', value: 'bottom'},
        {label: 'Left', value: 'left'},
        {label: 'Right', value: 'right'},
      ],
    },
    defaultValue: 'bottom',
    label: 'Dots position',
    name: 'dotsPosition',
    type: 'select',
  },
];

export const schema: HydrogenComponentSchema = {
  childTypes: ['slideshow-slide'],
  inspector: [
    {
      group: 'Slideshow',
      inputs: slideshowInputs,
    },
    {
      group: 'Navigation & Controls',
      inputs: controlsInputs,
    },
  ],
  title: 'Slideshow',
  type: 'slideshow',
};
