import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {redirect} from '@shopify/remix-oxygen';

import {VARIANT_GID_PREFIX} from '~/config/constants';
import {createCartUrl} from '~/utils/shopify';

export default function Component() {
  return null;
}

/**
 * Automatically creates a new cart based on the URL and redirects straight to checkout.
 * Expected URL structure:
 * ```js
 * /cart/<variant_id>:<quantity>
 *
 * ```
 *
 * More than one `<variant_id>:<quantity>` separated by a comma, can be supplied in the URL, for
 * carts with more than one product variant.
 *
 * @example
 * Example path creating a cart with two product variants, different quantities, and a discount code in the querystring:
 * ```js
 * /cart/41007289663544:1,41007289696312:2?discount=WELCOME
 *
 * ```
 */
export async function loader({context, params, request}: LoaderFunctionArgs) {
  const {cart} = context;
  const {lines} = params;

  if (!lines) return redirect(createCartUrl());

  const linesMap = lines.split(',').map((line) => {
    const lineDetails = line.split(':');
    const variantId = lineDetails[0];
    const quantity = parseInt(lineDetails[1], 10);

    return {
      merchandiseId: `${VARIANT_GID_PREFIX}/${variantId}`,
      quantity,
    };
  });

  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  const discount = searchParams.get('discount');
  const discountArray = discount ? [discount] : [];

  const result = await cart.create({
    discountCodes: discountArray,
    lines: linesMap,
  });

  const cartResult = result.cart;

  if (result.errors?.length || !cartResult) {
    throw new Response('Link may be expired. Try checking the URL.', {
      status: 410,
    });
  }

  const headers = cart.setCartId(cartResult.id);

  if (!cartResult.checkoutUrl) {
    throw new Error('No checkout URL found');
  }

  return redirect(cartResult.checkoutUrl, {headers});
}
