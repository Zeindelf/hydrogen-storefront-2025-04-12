import type {CartApiQueryFragment} from 'types/generated/storefront';
import type {ShopCartLine} from 'types/shopify';

import {useAsyncValue} from '@remix-run/react';
import {Image, useOptimisticCart} from '@shopify/hydrogen';
import * as React from 'react';

import {Drawer} from '~/components/ui/drawer';
import {Link} from '~/components/ui/link';
import {IMAGE_ASPECT_RATIO} from '~/config/constants';
import {useUI} from '~/hooks/use-ui';
import {useVariantUrl} from '~/hooks/use-variant-url';
import {checkCartEmpty, variantIsDefault} from '~/utils/shopify';

import {MinicartBadge} from './badge';
import {MinicartEmpty} from './empty';

export const MinicartDrawer = () => {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  const {cart: displayCart, toggleCart} = useUI();
  const {isCartEmpty} = checkCartEmpty(cart);

  /** Open minicart with Cmd + M | Ctrl + M */
  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const keydown = (ev: KeyboardEvent) => {
      if (ev.key === 'm' && (ev.metaKey || ev.ctrlKey)) {
        ev.preventDefault();
        toggleCart();
      }
    };

    document.addEventListener('keydown', keydown, {signal});
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MinicartBadge count={cart?.totalQuantity ?? 0} />

      <Drawer.Root onOpenChange={toggleCart} open={displayCart}>
        <Drawer.Content className="w-full max-w-[410px]" title="Meu Carrinho">
          <Drawer.Header className="p-4">Minicart Header</Drawer.Header>

          <div className="flex h-full flex-col overflow-hidden">
            {isCartEmpty ? (
              <MinicartEmpty />
            ) : (
              <ul className="theme-scrollbar grow space-y-2 px-4">
                {cart?.lines.nodes.map((line) => (
                  <LineItem key={line.id} line={line} />
                ))}
              </ul>
            )}
          </div>

          <Drawer.Footer className="mt-auto">Minicart Footer</Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};

const LineItem = ({line}: {line: ShopCartLine}) => {
  const {
    // id,
    // isOptimistic,
    merchandise,
  } = line;
  const {image, product} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, merchandise);
  const {closeCart} = useUI();

  const _isDefaultVariant = variantIsDefault(merchandise);

  return (
    <li className="flex gap-2">
      <Link
        ariaLabel={product.title}
        className="flex flex-row space-x-4"
        onClick={closeCart}
        prefetch="intent"
        to={lineItemUrl}
      >
        <div className="relative w-24 cursor-pointer overflow-hidden rounded border">
          <Image
            alt={image?.altText || product.title}
            aspectRatio={IMAGE_ASPECT_RATIO}
            data={image || {}}
          />
        </div>
      </Link>

      <div className="flex w-full flex-col">
        <div className="text-medium mt-1 flex w-full flex-1 justify-between gap-1 text-sm">
          <p className="leading-tight">{product.title}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs">Line item operation</p>
        </div>
      </div>
    </li>
  );
};

MinicartDrawer.displayName = 'MinicartDrawer';
