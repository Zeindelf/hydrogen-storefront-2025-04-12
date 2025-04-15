import type {FetcherWithComponents} from '@remix-run/react';
import type {
  OptimisticCartLineInput,
  ShopifyAddToCartPayload,
} from '@shopify/hydrogen';
import type {PartialProductVariant} from 'types/shopify';

import {useNavigation} from '@remix-run/react';
import {
  AnalyticsEventName,
  CartForm,
  getClientBrowserParameters,
  sendShopifyAnalytics,
} from '@shopify/hydrogen';
import * as React from 'react';

import type {ButtonProps} from '~/components/ui/button';

import {Button} from '~/components/ui/button';
import {usePageAnalytics} from '~/hooks/use-page-analytics';
import {useUI} from '~/hooks/use-ui';
import {cn} from '~/utils/helpers';
import {createCartUrl} from '~/utils/shopify';

interface AddToCartButtonProps extends Omit<ButtonProps, 'ariaLabel'> {
  analytics?: unknown;
  quantity?: number;
  selectedVariant?: null | PartialProductVariant;
}

export const AddToCartButton = ({
  analytics,
  className,
  quantity = 1,
  selectedVariant,
  ...props
}: AddToCartButtonProps) => {
  const {openCart} = useUI();
  const navigation = useNavigation();
  const navigationIsLoading = navigation.state !== 'idle';
  const isOutOfStock = !selectedVariant?.availableForSale;
  const cartCta = isOutOfStock ? 'Esgotado' : 'Adicionar no carrinho';

  if (!selectedVariant) return null;

  const lines: Array<OptimisticCartLineInput> = [
    {merchandiseId: selectedVariant.id || '', quantity, selectedVariant},
  ];

  return (
    <CartForm
      action={CartForm.ACTIONS.LinesAdd}
      inputs={{lines}}
      route={createCartUrl()}
    >
      {(fetcher: FetcherWithComponents<any>) => {
        const _isLoading = fetcher.state !== 'idle' || navigationIsLoading;

        return (
          <AddToCartAnalytics fetcher={fetcher}>
            <input
              name="analytics"
              type="hidden"
              value={JSON.stringify(analytics)}
            />

            <Button
              ariaLabel={cartCta}
              className={cn('w-full', className)}
              disabled={isOutOfStock}
              onClick={openCart}
              type="submit"
              {...props}
            >
              <p className="text-sm">{cartCta}</p>
            </Button>
          </AddToCartAnalytics>
        );
      }}
    </CartForm>
  );
};

const AddToCartAnalytics = ({
  children,
  fetcher,
}: {
  children: React.ReactNode;
  fetcher: FetcherWithComponents<any>;
}) => {
  const fetcherData = fetcher.data;
  const formData = fetcher.formData;
  const pageAnalytics = usePageAnalytics({hasUserConsent: true});

  React.useEffect(() => {
    if (formData) {
      const cartData: Record<string, unknown> = {};
      const cartInputs = CartForm.getFormInput(formData);

      try {
        if (cartInputs.inputs.analytics) {
          const dataInForm: unknown = JSON.parse(
            String(cartInputs.inputs.analytics),
          );
          Object.assign(cartData, dataInForm);
        }
      } catch {
        // do nothing
      }

      if (Object.keys(cartData).length && fetcherData) {
        const addToCartPayload: ShopifyAddToCartPayload = {
          ...getClientBrowserParameters(),
          ...pageAnalytics,
          ...cartData,
          cartId: fetcherData.cart.id,
        };

        sendShopifyAnalytics({
          eventName: AnalyticsEventName.ADD_TO_CART,
          payload: addToCartPayload,
        });
      }
    }
  }, [fetcherData, formData, pageAnalytics]);

  return <>{children}</>;
};
