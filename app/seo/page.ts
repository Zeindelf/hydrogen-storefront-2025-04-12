import type {SeoConfig} from '@shopify/hydrogen';
import type {WebPage, WithContext} from 'schema-dts';
import type {PageFragment} from 'types/generated/storefront';
import type {PartialImage} from 'types/shopify';

import {truncate} from '~/utils/helpers';
import {createPageUrl, parseMedia} from '~/utils/shopify';

import type {BreadcrumbItem} from './breadcrumb';

import {createMedia} from './media';
import {createRobots} from './robots';

type PageMetadataArgs = {
  page: PageFragment;
  request: Request;
};

const createPageMetadata = (args: PageMetadataArgs) => {
  const {page, request} = args;
  const title = truncate(page.pageSeo?.title || page.title);
  const description = truncate(page.pageSeo?.description || page.body);
  const image = parseMedia<PartialImage>(page.pageImage?.reference);

  const {robots} = createRobots();
  const {media} = createMedia(image);

  const pageMetadata: SeoConfig = {
    description,
    media,
    robots,
    title,
    url: request.url,
  };

  return {pageMetadata};
};

const createPageBreadcrumbs = (args: PageMetadataArgs) => {
  const {page} = args;
  const listItems: BreadcrumbItem[] = [
    {
      ariaLabel: 'Ir para todas as páginas',
      pathname: createPageUrl(),
      title: 'Páginas',
    },
    {
      ariaLabel: page.title,
      pathname: createPageUrl(page.handle),
      title: page.title,
    },
  ];

  return {listItems};
};

const createPageSchema = ({page, request}: PageMetadataArgs) => {
  const pageSchema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    description: truncate(page.pageSeo?.description || page.body),
    name: page.title,
    url: request.url,
  };

  return {pageSchema};
};

interface PageSeoArgs extends PageMetadataArgs {}

export const pageSeo = (args: PageSeoArgs) => {
  const {listItems} = createPageBreadcrumbs(args);
  const {pageMetadata} = createPageMetadata(args);

  const {pageSchema} = createPageSchema(args);

  const seo: SeoConfig = {...pageMetadata};
  const jsonLd = [pageSchema];

  return {jsonLd, listItems, seo};
};
