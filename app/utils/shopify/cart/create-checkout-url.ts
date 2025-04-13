import {createCartUrl} from '../storefront';

export type ProductLine = {
  quantity?: number;
  variantId: string;
};

// Add url shape: /cart/41007289663544:1,41007289696312:2?discount=WELCOME
export const createCheckoutUrl = (products: ProductLine[], origin?: string) => {
  const url = products
    .map((p) => `${p.variantId}:${p?.quantity || 1}`)
    .join(',');

  return `${createCartUrl(undefined, origin)}/${url}`;
};
