import type {CartQueryDataReturn} from '@shopify/hydrogen';
import type {
  ActionFunctionArgs,
  HeadersFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@shopify/remix-oxygen';
import type {CartApiQueryFragment} from 'types/generated/storefront';

import {redirectDocument, useLoaderData} from '@remix-run/react';
import {Analytics, CartForm, useOptimisticCart} from '@shopify/hydrogen';
import {data} from '@shopify/remix-oxygen';

import {Breadcrumb} from '~/components/global/breadcrumb';
import {csrfValidation} from '~/lib/csrf-token/csrf.server';
import {EmptyCart} from '~/pages/cart';
import {cartSeo} from '~/seo/cart';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {
  addDiscountCode,
  checkCartEmpty,
  removeDiscountCode,
} from '~/utils/shopify';

export const headers: HeadersFunction = ({actionHeaders}) => actionHeaders;

export async function action({context, request}: ActionFunctionArgs) {
  const {cart} = context;

  const formData = await request.formData();
  const {action, inputs} = CartForm.getFormInput(formData);

  if (!action) {
    throw new Error('No action provided');
  }

  let result: CartQueryDataReturn;

  switch (action) {
    case CartForm.ACTIONS.BuyerIdentityUpdate: {
      result = await cart.updateBuyerIdentity({
        ...inputs.buyerIdentity,
      });
      break;
    }
    case CartForm.ACTIONS.DiscountCodesUpdate: {
      await csrfValidation(formData, request.headers);
      const cartResponse = await cart.get();

      const discountCode = (inputs.discountCode as string).toUpperCase();
      const cartDiscountCodes = cartResponse?.discountCodes || [];
      const discountCodes = addDiscountCode(discountCode, cartDiscountCodes);

      result = await context.cart.updateDiscountCodes(discountCodes);
      break;
    }
    case CartForm.ACTIONS.GiftCardCodesUpdate: {
      // giftcardtest100 (R$ 100,00) | giftcardtest10 (R$ 10,00)
      const formGiftCardCode = inputs.giftCardCode;
      const giftCardCodes = (
        formGiftCardCode ? [formGiftCardCode] : []
      ) as string[];

      giftCardCodes.push(...inputs.giftCardCodes);

      result = await cart.updateGiftCardCodes(giftCardCodes);
      break;
    }
    case CartForm.ACTIONS.LinesAdd: {
      result = await cart.addLines(inputs.lines);
      break;
    }
    case CartForm.ACTIONS.LinesRemove: {
      result = await cart.removeLines(inputs.lineIds);
      break;
    }
    case CartForm.ACTIONS.LinesUpdate: {
      result = await cart.updateLines(inputs.lines);
      break;
    }
    case 'CustomDiscountCodesRemove': {
      const cartResponse = await cart.get();

      const discountCode = (
        inputs.applicableDiscountCode as string
      ).toUpperCase();
      const cartDiscountCodes = cartResponse?.discountCodes || [];
      const discountCodes = removeDiscountCode(discountCode, cartDiscountCodes);

      result = await context.cart.updateDiscountCodes(discountCodes);
      break;
    }
    default: {
      throw new Error(`${action} cart action is not defined`);
    }
  }

  const cartId = result?.cart?.id;
  const headers = cartId ? cart.setCartId(result.cart.id) : new Headers();
  const {cart: cartResult, errors, warnings} = result;

  const status = 200;
  const redirectTo = formData.get('redirectTo') ?? null;

  if (typeof redirectTo === 'string') {
    return redirectDocument(redirectTo, 303);
  }

  return data(
    {
      analytics: {cartId},
      cart: cartResult,
      errors,
      warnings,
    },
    {headers, status},
  );
}

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

const loadCriticalData = async ({context, request}: LoaderFunctionArgs) => {
  const {listItems, seo} = cartSeo({request});

  const cart = await context.cart.get();

  return {cart, listItems, seo};
};

const loadDeferredData = (_: LoaderFunctionArgs) => ({});

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function CartRoute() {
  const {cart, listItems} = useLoaderData<typeof loader>();

  return (
    <>
      <Breadcrumb listItems={listItems} />

      <CartLayout cart={cart} />

      <Analytics.CartView />
    </>
  );
}

const CartLayout = ({
  cart: originalCart,
}: {
  cart: CartApiQueryFragment | null;
}) => {
  const cart = useOptimisticCart(originalCart);
  const {isCartEmpty} = checkCartEmpty(cart);

  if (isCartEmpty) {
    return (
      <section className="container my-8">
        <EmptyCart />
      </section>
    );
  }

  return (
    <section className="container">
      <h1>Meu carrinho</h1>

      <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <p>CART_ITEMS</p>
        </div>

        <p>CART_SUMMARY</p>
      </div>
    </section>
  );
};
