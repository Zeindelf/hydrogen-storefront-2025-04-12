import {cva} from 'class-variance-authority';
import * as React from 'react';
import {Drawer as DrawerPrimitive} from 'vaul';

import {createContext} from '~/hooks/utils/create-context';
import {cn} from '~/utils/helpers';

import {Icons} from '../icons';
import {overlayVariants} from '../overlay';

const DEFAULT_DIRECTION = 'right';

const drawerDef = {hookName: 'useDrawer()', name: 'DrawerProvider'};
const [DrawerContextProvider, useDrawerContext] = createContext<{
  direction?: 'bottom' | 'left' | 'right' | 'top';
}>(drawerDef);

export const useDrawer = useDrawerContext;

export const Root = ({
  direction = DEFAULT_DIRECTION,
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerContextProvider value={{direction}}>
    <DrawerPrimitive.Root
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      direction={direction}
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  </DrawerContextProvider>
);
Root.displayName = 'Drawer.Root';

export const Trigger = DrawerPrimitive.Trigger;

export const Portal = DrawerPrimitive.Portal;

export const Close = DrawerPrimitive.Close;

export const Overlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <DrawerPrimitive.Overlay
    className={cn(overlayVariants(), className)}
    ref={ref}
    {...props}
  />
));
Overlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerContentVariants = cva(
  'fixed z-50 flex h-auto flex-col border bg-background',
  {
    compoundVariants: [
      {
        className: 'max-h-[calc(100%-56px)]',
        direction: ['bottom', 'top'],
      },
    ],
    defaultVariants: {
      direction: DEFAULT_DIRECTION,
    },
    variants: {
      direction: {
        bottom: 'inset-x-0 bottom-0 mt-24 rounded-t-[10px]',
        left: 'inset-y-0 left-0',
        right: 'inset-y-0 right-0',
        top: 'inset-x-0 top-0 mb-24 rounded-b-[10px]',
      },
    },
  },
);

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  description?: string;
  title?: string;
  withCloseButton?: boolean;
}

export const Content = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  {withOverlay?: boolean} & DrawerContentProps
>(
  (
    {
      children,
      className,
      description,
      title,
      withCloseButton = false,
      withOverlay = true,
      ...props
    },
    ref,
  ) => {
    const {direction} = useDrawer();

    return (
      <Portal>
        {withOverlay && <Overlay />}

        <DrawerPrimitive.Content
          className={cn(drawerContentVariants({className, direction}))}
          ref={ref}
          {...props}
        >
          {direction === 'bottom' && (
            <div className="mx-auto mt-4 before:flex before:h-2 before:w-[100px] before:rounded-full before:bg-muted" />
          )}

          {(direction === 'left' || direction === 'right') &&
            withCloseButton && (
              <DrawerPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                <Icons.Lucide.X className="size-4" />
                <span className="sr-only">Close</span>
              </DrawerPrimitive.Close>
            )}

          {children}

          <DrawerPrimitive.Title className="sr-only">
            {title}
          </DrawerPrimitive.Title>
          <DrawerPrimitive.Description className="sr-only">
            {description}
          </DrawerPrimitive.Description>
        </DrawerPrimitive.Content>
      </Portal>
    );
  },
);
Content.displayName = 'Drawer.Content';

export const Body = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...props}, ref) => {
  return (
    <div
      className={cn('px-4 md:px-0 theme-scrollbar', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

export const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
);
Header.displayName = 'Drawer.Header';

export const Footer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
);
Footer.displayName = 'Drawer.Footer';

export const Title = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({className, ...props}, ref) => (
  <DrawerPrimitive.Title
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    ref={ref}
    {...props}
  />
));
Title.displayName = DrawerPrimitive.Title.displayName;

export const Description = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({className, ...props}, ref) => (
  <DrawerPrimitive.Description
    className={cn('text-sm text-muted-foreground', className)}
    ref={ref}
    {...props}
  />
));
Description.displayName = DrawerPrimitive.Description.displayName;
