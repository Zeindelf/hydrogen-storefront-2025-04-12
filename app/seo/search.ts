import type {SeoConfig} from '@shopify/hydrogen';

import {createSearchUrl} from '~/utils/shopify';

import type {BreadcrumbItem} from './breadcrumb';

import {createRobots} from './robots';

interface SearchMetadataArgs {
  request: Request;
  searchTerm: string;
  totalCount: number;
}

const createSearchMetadata = (args: SearchMetadataArgs) => {
  const {request, searchTerm, totalCount} = args;
  // TODO: get dinamic singluar/plural text
  const title = `Pesquisa: ${totalCount} resultados encontrados para "${searchTerm}"`;
  const description = `Mostrando ${totalCount} resultados da busca para: ${searchTerm}`;

  const {robots} = createRobots({noFollow: true, noIndex: true});

  const searchMetadata: SeoConfig = {
    description,
    robots,
    title,
    url: request.url,
  };

  return {searchMetadata};
};

const createSearchBreadcrumbs = () => {
  const listItems: BreadcrumbItem[] = [
    {
      ariaLabel: 'Realizar uma busca',
      pathname: createSearchUrl(),
      title: 'Busca',
    },
  ];

  return {listItems};
};

interface SearchSeoArgs extends SearchMetadataArgs {}

export const searchSeo = (args: SearchSeoArgs) => {
  const {searchMetadata} = createSearchMetadata(args);
  const {listItems} = createSearchBreadcrumbs();

  const seo: SeoConfig = {...searchMetadata};

  return {listItems, seo};
};
