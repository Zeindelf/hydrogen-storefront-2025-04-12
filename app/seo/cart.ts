import type {SeoConfig} from '@shopify/hydrogen';

import {createCartUrl} from '~/utils/shopify';

import type {BreadcrumbItem} from './breadcrumb';

import {createRobots} from './robots';

interface CartMetadataArgs {
  request: Request;
}

const createCartMetadata = (args: CartMetadataArgs) => {
  const {request} = args;
  const {robots} = createRobots({noFollow: true, noIndex: true});

  const cartMetadata: SeoConfig = {
    description: 'Seu Carrinho de Compras',
    robots,
    title: 'Seu Carrinho de Compras',
    url: request.url,
  };

  return {cartMetadata};
};

const createCartBreadcrumbs = () => {
  const listItems: BreadcrumbItem[] = [
    {
      ariaLabel: 'Ir até meu carrinho',
      pathname: createCartUrl(),
      title: 'Meu Carrinho',
    },
  ];

  return {listItems};
};

interface CartSeoArgs extends CartMetadataArgs {}

export const cartSeo = (args: CartSeoArgs) => {
  const {request} = args;
  const {cartMetadata} = createCartMetadata({request});

  const {listItems} = createCartBreadcrumbs();

  const seo: SeoConfig = {...cartMetadata};

  return {listItems, seo};
};
