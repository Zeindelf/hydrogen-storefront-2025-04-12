import type {SeoConfig} from '@shopify/hydrogen';
import type {WebPage, WithContext} from 'schema-dts';
import type {PolicyFragment} from 'types/generated/storefront';
import type {PoliciesPath, Shopify} from 'types/shopify';

import {createPoliciesUrl} from '~/utils/shopify';

import type {BreadcrumbItem} from './breadcrumb';

import {createRobots} from './robots';

type PolicyMeta = {
  policy?: null | PolicyFragment;
  shopify: Shopify;
};

interface PoliciesMetadataArgs extends PolicyMeta {
  request: Request;
}

const createSampleMeta = ({policy, shopify}: PolicyMeta) => {
  const title = policy?.title ?? 'Nossas Políticas';
  const description = !policy
    ? 'Conheça nossas políticas'
    : `Conheça a ${policy?.title} da ${shopify.name}. A proteção da sua privacidade é muito importante para nós.`;

  return {description, title};
};

const createPoliciesMetadata = (args: PoliciesMetadataArgs) => {
  const {policy, request, shopify} = args;
  const {description, title} = createSampleMeta({policy, shopify});

  const {robots} = createRobots();

  const policiesMetadata: SeoConfig = {
    description,
    robots,
    title,
    url: request.url,
  };

  return {policiesMetadata};
};

type PoliciesBreadcrumbArgs = {
  policy?: null | PolicyFragment;
};

const createPoliciesBreadcrumb = (args?: PoliciesBreadcrumbArgs) => {
  const policy = args?.policy;

  const policyItemBase = {
    ariaLabel: 'Ir até a lista de Políticas',
    pathname: createPoliciesUrl(),
    title: 'Políticas',
  };

  const policyPage = {
    ariaLabel: `Ir até a política: ${policy?.title}`,
    pathname: createPoliciesUrl(policy?.handle as PoliciesPath),
    title: policy?.title || '',
  };

  const listItems: BreadcrumbItem[] = [
    policyItemBase,
    ...(policy ? [policyPage] : []),
  ];

  return {listItems};
};

const createPoliciesSchema = (args: PoliciesMetadataArgs) => {
  const {policy, request, shopify} = args;
  const {origin} = new URL(request.url);
  const {description, title} = createSampleMeta({policy, shopify});

  const policiesSchema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    description,
    name: title,
    url: `${createPoliciesUrl(policy?.handle as PoliciesPath, origin)}`,
  };

  return {policiesSchema};
};

interface PoliciesSeoArgs extends PoliciesMetadataArgs {}

export const policiesSeo = (args: PoliciesSeoArgs) => {
  const {policy} = args;
  const {listItems} = createPoliciesBreadcrumb({policy});
  const {policiesMetadata} = createPoliciesMetadata(args);

  const {policiesSchema} = createPoliciesSchema(args);

  const seo: SeoConfig = {...policiesMetadata};
  const jsonLd = [policiesSchema];

  return {jsonLd, listItems, seo};
};
