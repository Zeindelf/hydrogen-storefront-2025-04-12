import type {CachingStrategy} from '@shopify/hydrogen';

import {CacheShort, createWithCache} from '@shopify/hydrogen';

import {
  ADMIN_CLIENT,
  graphqlRequestBody,
  minifyQuery,
  validateServerSideUsage,
} from '~/utils/helpers';

export function createAdminApi({
  cache,
  env,
  request,
  waitUntil,
}: {
  cache: Cache;
  env: Env;
  request: Request;
  waitUntil: ExecutionContext['waitUntil'];
}) {
  validateServerSideUsage();

  const adminApiVersion = env.PUBLIC_STOREFRONT_API_VERSION;
  const privateAdminToken = env.PRIVATE_ACCESS_TOKEN;
  const storeDomain = env.PUBLIC_STORE_DOMAIN;

  const withCache = createWithCache({cache, request, waitUntil});
  const buyerIp = request.headers.get('x-forwarded-for');
  const url = `https://${storeDomain}/admin/api/${adminApiVersion}/graphql.json`;
  const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': privateAdminToken,
    ...(buyerIp ? {'Shopify-Storefront-Buyer-IP': buyerIp} : {}),
  };

  return {
    async query<TData, TVariables = unknown>(
      query: string,
      options?: {
        cache?: CachingStrategy;
        variables?: TVariables;
      },
    ) {
      const body = graphqlRequestBody(minifyQuery(query), options?.variables);

      const {data, response} = await withCache.fetch<{
        data: TData;
        error: string;
      }>(
        url,
        {
          body,
          headers,
          method: 'POST',
        },
        {
          cacheKey: ['admin_api', body],
          cacheStrategy: options?.cache ?? CacheShort(),
          displayName: `${ADMIN_CLIENT} - ${
            query.match(/^(query|mutation)\s\w+/)?.[0]
          }`,
          shouldCacheResponse: (body) => !body?.error,
        },
      );

      if (!response.ok || !data) {
        if (response.status === 403 || response.status === 401) {
          throw new Error(
            `Request to the Admin API failed! You may have a bad value in 'hydrogen.config.js'. Response status: ${
              response.status
            }, Request ID: ${response.headers.get('x-request-id')}`,
          );
        }

        throw new Error(
          `Request to the Admin API failed! Response status: ${
            response.status
          }, Request ID: ${response.headers.get('x-request-id')}`,
        );
      }

      return data.data;
    },
  };
}
