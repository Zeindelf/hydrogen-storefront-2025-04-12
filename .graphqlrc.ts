import type {IGraphQLConfig} from 'graphql-config';
import {getSchema, pluckConfig, preset} from '@shopify/hydrogen-codegen';
import {ApiType, shopifyApiTypes} from '@shopify/api-codegen-preset';

const API_VERSION = process.env.PUBLIC_STOREFRONT_API_VERSION;

/**
 * GraphQL Config
 * @see https://the-guild.dev/graphql/config/docs/user/usage
 * @type {IGraphQLConfig}
 */
export default {
  projects: {
    default: {
      schema: getSchema('storefront'),
      documents: [
        './app/{routes,pages,sections,components,sitemap}/**/*.{ts,tsx,js,jsx}',
        './app/graphql/storefront/**/*.{ts,tsx,js,jsx}',
      ],
      extensions: {
        codegen: {
          pluckConfig,
          generates: {
            'types/generated/storefront.d.ts': {
              preset,
            },
          },
        },
      },
    },

    customer: {
      schema: getSchema('customer-account'),
      documents: ['./app/graphql/customer/**/*.{ts,tsx,js,jsx}'],
      extensions: {
        pluckConfig,
        codegen: {
          generates: {
            'types/generated/customer.d.ts': {
              preset,
            },
          },
        },
      },
    },

    admin: {
      schema: `https://shopify.dev/admin-graphql-direct-proxy/${API_VERSION}`,
      documents: ['./app/graphql/admin/**/*.{ts,tsx,js,jsx}'],
      extensions: {
        pluckConfig,
        codegen: {
          generates: {
            'types/generated/admin.ts': {
              plugins: ['typescript', 'typescript-operations'],
              ...shopifyApiTypes({
                apiType: ApiType.Admin,
                apiVersion: API_VERSION,
              }),
            },
          },
        },
      },
    },
  },
} as IGraphQLConfig;
