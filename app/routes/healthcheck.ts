import type {LoaderFunctionArgs} from '@remix-run/server-runtime';

// Learn more: https://fly.io/docs/reference/configuration/#services-http_checks
export async function loader({context, request}: LoaderFunctionArgs) {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');
  const headers = {'x-healthcheck': 'true'};

  try {
    const url = new URL('/', `http://${host}`);
    // if we can fetch a simple query and make a HEAD request to ourselves, then we're good.
    await Promise.all([
      context.storefront.query(HEALTH_SHOP_QUERY),
      context.admin.query(HEALTH_SHOP_QUERY),
      fetch(url.toString(), {headers, method: 'HEAD'}).then((res) => {
        if (!res.ok) return Promise.reject(res);
      }),
    ]);

    return new Response('OK');
  } catch (error: unknown) {
    console.error('healthcheck ❌', {error});
    return new Response('ERROR', {status: 500});
  }
}

const HEALTH_SHOP_QUERY = `#graphql
  query HealthShop {
    shop {
      name
    }
  }
` as const;
