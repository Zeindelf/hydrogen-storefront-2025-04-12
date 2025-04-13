import type {SeoConfig} from '@shopify/hydrogen';
import type {AccountPath} from 'types/shopify';

import {createAccountUrl} from '~/utils/shopify';

import type {BreadcrumbItem} from './breadcrumb';

import {createRobots} from './robots';

type BaseMeta = {
  name?: null | string;
  type?: AccountPath | null;
};

export interface AccountMetadataArgs extends BaseMeta {
  request: Request;
}

const createTitle = ({name, type}: BaseMeta) => {
  switch (type) {
    case 'addresses':
      return `${name}: Minha Conta`;
    case 'orders':
      return `${name}: Minha Conta`;
    case 'profile':
      return `${name}: Minha Conta`;
    case 'wishlist':
      return `${name}: Minha Conta`;
    default:
      return 'Minha Conta';
  }
};

export const createAccountMetadata = (args: AccountMetadataArgs) => {
  const {name, request, type} = args;
  const url = request.url;
  const title = createTitle({name, type});
  const description = 'Minha Conta';

  const {robots} = createRobots({noFollow: true, noIndex: true});

  const accountMetadata: SeoConfig = {
    description,
    robots,
    title,
    url,
  };

  return {accountMetadata};
};

export type AccountBreadcrumbArgs = {
  handle?: null | number | string;
  title?: null | string;
  type?: AccountPath | null;
};

export const createAccountBreadcrumb = (args: AccountBreadcrumbArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {handle, title, type} = args;

  const accountItemBase: BreadcrumbItem = {
    ariaLabel: 'Minha Conta',
    pathname: createAccountUrl(),
    title: 'Minha Conta',
  };

  const profile = {
    ariaLabel: `Minha Conta - Meu Perfil`,
    pathname: createAccountUrl('profile'),
    title: 'Meu Perfil',
  };

  const addresses = {
    ariaLabel: `Minha Conta - Meus Endereços`,
    pathname: createAccountUrl('addresses'),
    title: 'Meus Endereços',
  };

  const orders = {
    ariaLabel: `Minha Conta: Meus Pedidos`,
    pathname: createAccountUrl('orders'),
    title: 'Meus Pedidos',
  };

  const wishlist = {
    ariaLabel: `Minha Conta: Meus Favoritos`,
    pathname: createAccountUrl('wishlist'),
    title: 'Meus Favoritos',
  };

  const listItems: BreadcrumbItem[] = [
    accountItemBase,
    ...(type === 'profile' ? [profile] : []),
    ...(type === 'addresses' ? [addresses] : []),
    ...(type === 'orders' ? [orders] : []),
    ...(type === 'wishlist' ? [wishlist] : []),
  ];

  return {listItems};
};
