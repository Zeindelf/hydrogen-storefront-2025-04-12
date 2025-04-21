import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
  InspectorGroup,
} from '@weaverse/hydrogen';
import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';
import * as React from 'react';

import {Carousel} from '~/components/ui/carousel';
import {Section} from '~/layout/section';
import {carousel} from '~/layout/theme/carousel';
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

export interface SlideshowDotsProps
  extends VariantProps<typeof slideshowDotsVariants> {
  className?: string;
}

export function Dots({className, dotsPosition}: SlideshowDotsProps) {
  return (
    <Carousel.Dots
      className={cn(slideshowDotsVariants({dotsPosition}), className)}
    />
  );
}

export type SlideshowDotsVariants = VariantProps<typeof slideshowDotsVariants>;

export interface SlideshowProps
  extends HydrogenComponentProps,
    SlideshowDotsVariants {
  dotsPosition: 'bottom' | 'left' | 'right' | 'top';
  effect?: 'fade' | 'slide';
  loop: boolean;
  showArrows: boolean;
  showDots: boolean;
}

const Slideshow = React.forwardRef<HTMLDivElement, SlideshowProps>(
  ({children = [], loop, showArrows, showDots, ...props}, ref) => {
    return (
      <Section className="group h-full" ref={ref} {...props}>
        <Carousel.Root opts={{loop}}>
          {showArrows && (
            <>
              <Carousel.Previous
                ariaLabel="Imagem anterior"
                className={cn(
                  carousel.arrows.options.vertical,
                  'left-4 max-md:left-2',
                )}
              />
              <Carousel.Next
                ariaLabel="Próxima imagem"
                className={cn(
                  carousel.arrows.options.vertical,
                  'right-4 max-md:right-2',
                )}
              />
            </>
          )}

          <Carousel.Content className="ml-0">
            {React.Children.map(children, (child, index) => (
              <Carousel.Item className="overflow-hidden pl-0" key={child.key}>
                {React.cloneElement(child, {index})}
              </Carousel.Item>
            ))}
          </Carousel.Content>

          {showDots && <Dots {...props} />}
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
