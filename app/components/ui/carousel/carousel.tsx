import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import * as React from 'react';

import {cn} from '~/utils/helpers';

import {Button} from '../button';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  orientation?: 'horizontal' | 'vertical';
  plugins?: CarouselPlugin;
  setApi?: (carouselApi: CarouselApi) => void;
  thumbsOrientation?: 'horizontal' | 'vertical';
};

type CarouselContextProps = {
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselApi: ReturnType<typeof useEmblaCarousel>[1];
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (value: number) => void;
  selectedIndex: () => number;
  thumbsApi: ReturnType<typeof useEmblaCarousel>[1];
  thumbsRef: ReturnType<typeof useEmblaCarousel>[0];
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

export const useCarousel = () => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
};

export const Root = React.forwardRef<
  HTMLDivElement,
  CarouselProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      children,
      className,
      opts,
      orientation = 'horizontal',
      plugins,
      setApi,
      thumbsOrientation = 'horizontal',
      ...props
    },
    ref,
  ) => {
    const [carouselRef, carouselApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const [_, setSelectedThumbIndex] = React.useState(0);
    const [thumbsRef, thumbsApi] = useEmblaCarousel({
      axis: thumbsOrientation === 'horizontal' ? 'x' : 'y',
      containScroll: 'keepSnaps',
      dragFree: true,
    });

    React.useEffect(() => {
      const handleSelectChange = () => {
        const index = carouselApi?.selectedScrollSnap();
        setCurrentIndex(index || 0);
      };

      carouselApi?.on('select', handleSelectChange);

      return () => {
        carouselApi?.off('select', handleSelectChange);
      };
    }, [carouselApi]);

    const onSelect = React.useCallback(
      (api: CarouselApi) => {
        if (!api || !thumbsApi) {
          return;
        }

        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());

        setSelectedThumbIndex(api.selectedScrollSnap());
        thumbsApi.scrollTo(api.selectedScrollSnap());
      },
      [thumbsApi],
    );

    const scrollPrev = React.useCallback(
      () => carouselApi?.scrollPrev(),
      [carouselApi],
    );

    const scrollNext = React.useCallback(
      () => carouselApi?.scrollNext(),
      [carouselApi],
    );

    const scrollTo = React.useCallback(
      (index: number) => carouselApi?.scrollTo(index),
      [carouselApi],
    );

    const selectedIndex = React.useCallback(() => currentIndex, [currentIndex]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!carouselApi || !setApi) {
        return;
      }

      setApi(carouselApi);
    }, [carouselApi, setApi]);

    React.useEffect(() => {
      if (!carouselApi) {
        return;
      }

      onSelect(carouselApi);
      carouselApi.on('reInit', onSelect);
      carouselApi.on('select', onSelect);

      return () => {
        carouselApi?.off('select', onSelect);
      };
    }, [carouselApi, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          canScrollNext,
          canScrollPrev,
          carouselApi,
          carouselRef,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollNext,
          scrollPrev,
          scrollTo,
          selectedIndex,
          thumbsApi,
          thumbsOrientation,
          thumbsRef,
        }}
      >
        <div
          aria-roledescription="carousel"
          className={cn('relative', className)}
          onKeyDownCapture={handleKeyDown}
          ref={ref}
          role="region"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Root.displayName = 'Carousel.Root';

const Viewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div className={cn('flex', className)} ref={ref} {...props} />
));
Viewport.displayName = 'CarouselViewport';

export const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
  const {carouselRef, orientation} = useCarousel();

  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Content.displayName = 'Carousel.Content';

export const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
  const {orientation} = useCarousel();

  return (
    <div
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      ref={ref}
      role="group"
      {...props}
    />
  );
});
Item.displayName = 'Carousel.Item';

const NAV_ICON_SIZE = 20;

export const carouselArrowsVariants = cva(
  'size-8 rounded border bg-background shadow-lg',
  {
    variants: {
      placement: {
        vertical: 'absolute top-1/2 z-10 -translate-y-1/2',
      },
    },
  },
);

export type CarouselArrowsVariants = VariantProps<
  typeof carouselArrowsVariants
>;

interface CarouselNavigationProps
  extends CarouselArrowsVariants,
    Omit<React.ComponentProps<typeof Button>, 'ariaLabel' | 'size'> {
  ariaLabel?: string;
  size?: number;
}

export const Previous = React.forwardRef<
  HTMLButtonElement,
  CarouselNavigationProps
>(({className, placement, size = NAV_ICON_SIZE, ...props}, ref) => {
  const {carouselApi, scrollPrev} = useCarousel();

  if (!carouselApi?.canScrollPrev() && !carouselApi?.canScrollNext()) {
    return null;
  }

  return (
    <Button
      ariaLabel="Imagem do banner anterior"
      className={cn(carouselArrowsVariants({className, placement}))}
      disabled={!carouselApi?.canScrollPrev()}
      onClick={scrollPrev}
      ref={ref}
      size="icon"
      variant="ghost"
      {...props}
    >
      <ArrowLeft size={size} />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
Previous.displayName = 'Carousel.Previous';

export const Next = React.forwardRef<
  HTMLButtonElement,
  CarouselNavigationProps
>(({className, placement, size = NAV_ICON_SIZE, ...props}, ref) => {
  const {carouselApi, scrollNext} = useCarousel();

  if (!carouselApi?.canScrollPrev() && !carouselApi?.canScrollNext()) {
    return null;
  }

  return (
    <Button
      ariaLabel="Próxima imagem do banner"
      className={cn(carouselArrowsVariants({className, placement}))}
      disabled={!carouselApi?.canScrollNext()}
      onClick={scrollNext}
      ref={ref}
      size="icon"
      variant="ghost"
      {...props}
    >
      <ArrowRight size={size} />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
Next.displayName = 'Carousel.Next';

export const Controls = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
  const {carouselApi} = useCarousel();

  if (!carouselApi?.canScrollPrev() && !carouselApi?.canScrollNext()) {
    return null;
  }

  return (
    <div
      className={cn('flex items-center justify-end', className)}
      ref={ref}
      {...props}
    />
  );
});
Controls.displayName = 'Carousel.Controls';

export interface TriggerButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string;
  index: number;
}

export const Trigger = React.forwardRef<HTMLButtonElement, TriggerButtonProps>(
  ({ariaLabel, children, className, index, ...props}, ref) => {
    const {scrollTo, selectedIndex} = useCarousel();

    const currentIndex = selectedIndex();
    const selected = currentIndex === index;

    return (
      <button
        aria-label={ariaLabel || props['aria-label']}
        className={cn(className)}
        data-selected={selected ? '' : undefined}
        onClick={() => scrollTo(index)}
        ref={ref}
        title={props.title || ariaLabel}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Trigger.displayName = 'Carousel.Trigger';

export const Dots = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({className, ...props}, ref) => {
  const {carouselApi, scrollTo, selectedIndex} = useCarousel();
  const scrollSnaps = carouselApi?.scrollSnapList();

  if (!carouselApi?.canScrollPrev() && !carouselApi?.canScrollNext()) {
    return null;
  }

  return (
    <ul
      className={cn('my-4 flex gap-2', className)}
      ref={ref}
      role="tablist"
      {...props}
    >
      {scrollSnaps?.map((snap, idx) => {
        const isActive = selectedIndex() === idx;

        return (
          <li
            aria-hidden={!isActive}
            aria-selected={isActive}
            key={snap}
            role="tab"
          >
            <button
              aria-label={`Mostrando item ${idx + 1} de ${scrollSnaps.length}`}
              className={cn(
                'h-2 w-2 ease-out duration-300 rounded-full opacity-60 bg-foreground/50',
                {'w-6 bg-white opacity-100': isActive},
              )}
              onClick={() => scrollTo(idx)}
              tabIndex={isActive ? 0 : -1}
            />
          </li>
        );
      })}
    </ul>
  );
});

export const ThumbsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...props}, ref) => {
  const {thumbsOrientation, thumbsRef} = useCarousel();

  return (
    <div className=" overflow-hidden" ref={thumbsRef}>
      <div
        className={cn(
          'flex gap-2 min-w-0',
          thumbsOrientation === 'vertical' && 'flex-col',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});
ThumbsContent.displayName = 'Carousel.ThumbsContent';

export const ThumbsItem = React.forwardRef<
  HTMLButtonElement,
  {
    index: number;
  } & React.HTMLAttributes<HTMLButtonElement>
>(({className, index, ...props}, ref) => {
  const {scrollTo, selectedIndex} = useCarousel();
  const selected = index === selectedIndex();

  return (
    <button
      aria-roledescription="slide"
      className={cn(
        'select-none rounded-md overflow-hidden touch-manipulation grow-0 shrink-0 border border-transparent',
        className,
      )}
      data-thumb-selected={selected ? '' : undefined}
      onClick={() => scrollTo(index)}
      ref={ref}
      {...props}
    />
  );
});
Item.displayName = 'Carousel.ThumbsItem';
