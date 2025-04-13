import type {SeoConfig} from '@shopify/hydrogen';
import type {WebSite, WithContext} from 'schema-dts';
import type {Shopify} from 'types/shopify';

import type {SocialMediaType} from '~/components/resources/social-media';

import {socialLinks, truncate} from '~/utils/helpers';

import {createMedia} from './media';
import {createOrganizationSchema} from './organization';
import {createRobots} from './robots';

interface WebsiteMetadataArgs {
  request: Request;
  shopify: Shopify;
  socials: SocialMediaType[];
}

const createWebsiteMetadata = (args: WebsiteMetadataArgs) => {
  const {request, shopify, socials} = args;
  const title = shopify.name;
  const description = truncate(shopify.description ?? `${title} description`);

  const social = socials.find((social) => social.link.search(/twitter|x/) > -1);
  const twitter = socialLinks(social?.link);

  const {robots} = createRobots();
  const {media} = createMedia(shopify.brand?.coverImage?.image);

  const websiteMetadata: SeoConfig = {
    alternates: {
      language: shopify.locale,
      url: request.url,
    },
    description,
    ...(twitter && {handle: `@${twitter.user}`}),
    media,
    robots,
    title,
    titleTemplate: `%s | ${title}`,
    url: request.url,
  };

  return {websiteMetadata};
};

const createWebsiteSchema = (args: WebsiteMetadataArgs) => {
  const {request, shopify, socials} = args;
  const {origin} = new URL(request.url);

  const websiteSchema: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: shopify.name,
    potentialAction: {
      '@type': 'SearchAction',
      query: 'required name=term',
      target: `${origin}/search?q={term}`,
    },
    sameAs: socials.map((social) => social.link),
    url: request.url,
  };

  return {websiteSchema};
};

interface WebsiteSeoArgs extends WebsiteMetadataArgs {}

export const websiteSeo = (args: WebsiteSeoArgs) => {
  const {websiteMetadata} = createWebsiteMetadata(args);

  const {websiteSchema} = createWebsiteSchema(args);
  const {organizationSchema, placeSchema} = createOrganizationSchema(args);

  const seo: SeoConfig = {...websiteMetadata};
  const jsonLd = [websiteSchema, organizationSchema, placeSchema];

  return {jsonLd, seo};
};
