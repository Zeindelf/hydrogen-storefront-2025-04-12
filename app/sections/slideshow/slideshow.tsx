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

const slideshowVariants = cva('group h-full', {
  compoundVariants: [
    {
      className: 'h-screen',
      height: 'full',
    },
  ],
  defaultVariants: {
    height: 'large',
  },
  variants: {
    height: {
      full: '',
      large: 'h-[70vh] lg:h-[80vh]',
      medium: 'h-[50vh] lg:h-[60vh]',
      small: 'h-[40vh] lg:h-[50vh]',
    },
  },
});

const slideshowDotsVariants = cva(
  'w- absolute z-1 flex !w-auto items-center justify-center gap-4 px-2.5',
  {
    defaultVariants: {
      dotsPosition: 'bottom',
    },
    variants: {
      dotsPosition: {
        bottom: '!inset-x-0 !bottom-10 !top-auto',
        left: '!inset-y-0 !left-5 !right-auto flex-col',
        right: '!inset-y-0 !left-auto !right-5 flex-col',
        top: '!inset-x-0 !bottom-auto !top-10',
      },
    },
  },
);

export type SlideshowVariantsProps = VariantProps<typeof slideshowVariants>;

export type SlideshowDotsVariants = VariantProps<typeof slideshowDotsVariants>;

export interface SlideshowProps
  extends HydrogenComponentProps,
    SlideshowDotsVariants,
    SlideshowVariantsProps {
  dotsPosition: 'bottom' | 'left' | 'right' | 'top';
  effect?: 'fade' | 'slide';
  loop: boolean;
  showArrows: boolean;
  showDots: boolean;
}

const Slideshow = React.forwardRef<HTMLDivElement, SlideshowProps>(
  (
    {children = [], dotsPosition, height, loop, showArrows, showDots, ...props},
    ref,
  ) => {
    return (
      <Section className={slideshowVariants({height})} ref={ref} {...props}>
        <Carousel.Root opts={{loop}}>
          {showArrows && (
            <>
              <Carousel.Previous
                ariaLabel="Imagem anterior"
                className="max-md:left-2"
              />
              <Carousel.Next
                ariaLabel="Próxima imagem"
                className="max-md:right-2"
              />
            </>
          )}

          <Carousel.Content className="ml-0">
            {children}
            {/* {children.map((child, idx) => (
              <Carousel.Item
                className="overflow-hidden pl-0 md:rounded-lg"
                key={idx}
              >
                {child}
              </Carousel.Item>
            ))} */}
            {/* {heroData.map((hero, idx) => (
              <Carousel.Item
                className="overflow-hidden pl-0 md:rounded-lg"
                key={hero.title}
              >
                <Link
                  ariaLabel={`Imagem ${idx + 1} do banner principal`}
                  title={hero.title}
                  to={hero.url}
                >
                  <ArtDirectionImage
                    alt={hero.title}
                    desktop={hero.desktopImage.url}
                    loading={getImageLoadingPriority(idx, 1)}
                    mobile={hero.mobileImage.url}
                    src={hero.placeholder}
                  />
                </Link>
              </Carousel.Item>
            ))} */}
          </Carousel.Content>
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
        {label: 'Small', value: 'small'},
        {label: 'Medium', value: 'medium'},
        {label: 'Large', value: 'large'},
        {label: 'Fullscreen', value: 'full'},
      ],
    },
    defaultValue: 'full',
    label: 'Section height',
    name: 'height',
    type: 'select',
  },
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
