import type {CartViewPayload} from '@shopify/hydrogen';

import {useAnalytics} from '@shopify/hydrogen';
import {ShoppingCart} from 'lucide-react';

import {Badge} from '~/components/ui/badge';
import {buttonVariants} from '~/components/ui/button';
import {Link} from '~/components/ui/link';
import {useUI} from '~/hooks/use-ui';
import {cn, pad} from '~/utils/helpers';
import {createCartUrl} from '~/utils/shopify';

export const MinicartBadge = ({count}: {count?: number}) => {
  const {toggleCart} = useUI();
  const {cart, prevCart, publish, shop} = useAnalytics();

  return (
    <Link
      ariaLabel={`Carrinho - ${count} produtos adicionados`}
      className={cn(
        buttonVariants({size: 'icon', variant: 'ghost'}),
        'relative',
      )}
      onClick={(ev) => {
        ev.preventDefault();
        toggleCart();

        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window?.location?.href || '',
        } as CartViewPayload);
      }}
      prefetch="intent"
      to={createCartUrl()}
    >
      <ShoppingCart size={24} />
      <Badge asChild className="absolute -right-2 -top-1" variant="counter">
        <sup>{pad(count ?? 0)}</sup>
      </Badge>
    </Link>
  );
};
