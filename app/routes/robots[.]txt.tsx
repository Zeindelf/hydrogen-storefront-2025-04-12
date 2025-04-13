import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {parseGid} from '@shopify/hydrogen';

import {
  BLOG_PATH,
  COLLECTION_PATH,
  POLICIES_PATH,
  SEARCH_PATH,
} from '~/config/constants';

export async function loader({context, request}: LoaderFunctionArgs) {
  const {origin} = new URL(request.url);
  const {shop} = await context.storefront.query(ROBOTS_QUERY);

  const shopId = parseGid(shop.id).id;
  const body = robotsTxtData({shopId, url: origin});

  return new Response(body, {
    headers: {
      'Cache-Control': `max-age=${60 * 60 * 24}`,
      'Content-Type': 'text/plain',
    },
    status: 200,
  });
}

function robotsTxtData({shopId, url}: {shopId?: string; url?: string}) {
  const sitemapUrl = url ? `${url}/sitemap.xml` : undefined;

  return `
User-agent: *
${generalDisallowRules({shopId, sitemapUrl})}

# Google adsbot ignores robots.txt unless specifically named!
User-agent: adsbot-google
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /orders
${shopId ? `Disallow: /${shopId}/checkouts` : ''}
${shopId ? `Disallow: /${shopId}/orders` : ''}
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*

User-agent: Nutch
Disallow: /

User-agent: AhrefsBot
Crawl-delay: 10
${generalDisallowRules({shopId, sitemapUrl})}

User-agent: AhrefsSiteAudit
Crawl-delay: 10
${generalDisallowRules({shopId, sitemapUrl})}

User-agent: MJ12bot
Crawl-Delay: 10

User-agent: Pinterest
Crawl-delay: 1
  `.trim();
}

/**
 * This function generates disallow rules that generally follow what Shopify's
 * Online Store has as defaults for their robots.txt
 */
function generalDisallowRules({
  shopId,
  sitemapUrl,
}: {
  shopId?: string;
  sitemapUrl?: string;
}) {
  return `
Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
${shopId ? `Disallow: /${shopId}/checkouts` : ''}
${shopId ? `Disallow: /${shopId}/orders` : ''}
Disallow: /carts
Disallow: /account
Disallow: /${COLLECTION_PATH}/*sort_by*
Disallow: /*/${COLLECTION_PATH}/*sort_by*
Disallow: /${COLLECTION_PATH}/*+*
Disallow: /${COLLECTION_PATH}/*%2B*
Disallow: /${COLLECTION_PATH}/*%2b*
Disallow: /*/${COLLECTION_PATH}/*+*
Disallow: /*/${COLLECTION_PATH}/*%2B*
Disallow: /*/${COLLECTION_PATH}/*%2b*
Disallow: */${COLLECTION_PATH}/*filter*&*filter*
Disallow: /*/*sort*
Disallow: /*/*sort_by*
Disallow: /*/*+*
Disallow: /*/*%2B*
Disallow: /*/*%2b*
Disallow: /*/*filter*&*filter*
Disallow: /${BLOG_PATH}/*+*
Disallow: /${BLOG_PATH}/*%2B*
Disallow: /${BLOG_PATH}/*%2b*
Disallow: /*/${BLOG_PATH}/*+*
Disallow: /*/${BLOG_PATH}/*%2B*
Disallow: /*/${BLOG_PATH}/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /${POLICIES_PATH}/
Disallow: /*/${POLICIES_PATH}/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /${SEARCH_PATH}
Allow: /${SEARCH_PATH}/
Disallow: /${SEARCH_PATH}/?*
Disallow: /apple-app-site-association
Disallow: /.well-known/shopify/monorail
Disallow: /recommendations/products
Disallow: /*/recommendations/products
${sitemapUrl ? `Sitemap: ${sitemapUrl}` : ''}
  `;
}

const ROBOTS_QUERY = `#graphql
  query StoreRobots(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    shop {
      id
    }
  }
` as const;
