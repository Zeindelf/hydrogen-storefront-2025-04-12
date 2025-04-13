import type {Organization, Place, WithContext} from 'schema-dts';
import type {Shopify} from 'types/shopify';

import type {SocialMediaType} from '~/components/resources/social-media';

export const author = {
  email: 'zeindelf@hotmail.com',
  job: 'Front-End Engineer',
  name: 'Wellington Barreto',
  nickname: 'zeindelf',
  url: 'https://zeindelf.dev',
};

interface OrganizationSchemaArgs {
  request: Request;
  shopify: Shopify;
  socials: SocialMediaType[];
}

export const createOrganizationSchema = (args: OrganizationSchemaArgs) => {
  const {request, shopify, socials} = args;

  const organizationSchema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    address: {
      '@type': 'PostalAddress',
      addressCountry: shopify.address.country || '',
      addressLocality: shopify.address.city || '',
      addressRegion: shopify.address.province || '',
      postalCode: shopify.address.zip || '',
      streetAddress: shopify.address.address1 || '',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'contact email',
      email: shopify.email,
    },
    founders: [
      {
        '@type': 'Person',
        jobTitle: author.job,
        name: author.name,
      },
    ],
    foundingDate: '2024',
    legalName: shopify.name,
    logo: shopify.brand?.logo?.image?.url,
    name: shopify.name,
    sameAs: socials.map((social) => social.link),
    telephone: shopify.address.phone || '',
    url: request.url,
  };

  const placeSchema: WithContext<Place> = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: shopify.address.latitude || '',
      longitude: shopify.address.longitude || '',
    },
    hasMap: `https://www.google.com/maps/place/${shopify.address.latitude},${shopify.address.longitude}`,
    name: shopify.name,
  };

  // /* https://www.schemaapp.com/schema-markup/how-to-do-schema-markup-for-local-business/ */
  // const localBusinessSchema: WithContext<LocalBusiness> = {};

  return {organizationSchema, placeSchema};
};
