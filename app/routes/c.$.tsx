import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import type {MetaFunction} from '@shopify/remix-oxygen';

import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from '@remix-run/react';
import {
  Analytics,
  AnalyticsPageType,
  flattenConnection,
} from '@shopify/hydrogen';
import {isEmpty, last} from 'ramda';

import {Breadcrumb} from '~/components/global/breadcrumb';
import {Link} from '~/components/ui/link';
import {
  FILTER_FRAGMENT,
  MEDIA_FRAGMENT,
  PAGE_INFO_FRAGMENT,
  PRICE_RANGE_FRAGMENT,
  PRODUCT_ITEM_FRAGMENT,
  PRODUCT_VARIANT_FRAGMENT,
} from '~/graphql/storefront/fragments';
import {Errors} from '~/pages/errors';
import {collectionSeo} from '~/seo/collection';
import {JsonSchema} from '~/seo/json-schema';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {notFound} from '~/utils/helpers';
import {
  createCollectionsPaths,
  createCollectionVariables,
  createProductUrl,
  getFilters,
  verifyCollectionPage,
} from '~/utils/shopify';

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

const loadCriticalData = async (args: LoaderFunctionArgs) => {
  const {context, params, request} = args;
  const {navigation, shopify} = context;
  const pathname = params['*'] || '';

  const {collectionsPaths} = createCollectionsPaths(navigation);
  const {isCollectionPage} = verifyCollectionPage({collectionsPaths, pathname});

  if (!isCollectionPage || isEmpty(pathname)) throw notFound('Not found');

  const handles = pathname.split('/');
  const handle = last(handles) || '';
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const variables = createCollectionVariables(request, searchParams);

  const {collection, maxPrice, minPrice, paginate} =
    await context.storefront.query(COLLECTION_QUERY, {
      variables: {...variables, handle},
    });

  if (!collection) throw notFound('Collection not found');

  const productCount = paginate?.products.edges.length || 0;
  const products = flattenConnection(collection.products);
  const isProductsEmpty = isEmpty(products);

  const {filters} = getFilters({
    maxPrice: maxPrice?.products,
    minPrice: minPrice?.products,
    products: collection.products,
    request,
  });

  const {jsonLd, listItems, seo} = collectionSeo({
    collection,
    collectionsPaths,
    handles,
    request,
    shopify,
  });

  return {
    analytics: {
      handle,
      pageType: AnalyticsPageType.collection,
      resourceId: collection.id,
    },
    collection,
    filters,
    isProductsEmpty,
    jsonLd,
    listItems,
    pathname,
    productCount,
    products,
    seo,
  };
};

const loadDeferredData = (_: LoaderFunctionArgs) => ({});

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function CollectionRoute() {
  const {collection, jsonLd, listItems, pathname, products} =
    useLoaderData<typeof loader>();

  return (
    <>
      <JsonSchema jsonLd={jsonLd} />
      <Breadcrumb listItems={listItems} />

      <section className="container">
        <h1>{collection.title}</h1>
      </section>

      <section className="container grid grid-cols-3 gap-2">
        {products.map((product) => (
          <article key={product.id}>
            <Link
              ariaLabel={product.title}
              className="flex h-32 rounded border bg-white p-4"
              prefetch="intent"
              to={createProductUrl(product.handle)}
            >
              {product.title}
            </Link>
          </article>
        ))}
      </section>

      <Analytics.CollectionView
        data={{collection: {handle: pathname, id: collection.id}}}
      />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <Errors.NotFound />;
  }

  return <Errors.ErrorFallback />;
}

export const COLLECTION_QUERY = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    description
    collectionSeo :seo {
      description
      title
    }
    image {
      altText
      height
      id
      url
      width
    }
    seoText: metafield(namespace: "collection", key: "seo_text") {
      id
      key
      value
    }
  }

  query Collection(
    $handle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
    $filters: [ProductFilter!]
    $noPriceFilters: [ProductFilter!]
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    collection(
      handle: $handle
    ) {
      ...Collection
      products(
        first: $first
        last: $last
        before: $startCursor
        after: $endCursor
        sortKey: $sortKey
        reverse: $reverse
        filters: $filters
      ) {
        nodes {
          ...ProductItem
        }
        filters {
          ...Filter
        }
        pageInfo {
          ...PageInfo
        }
      }
    }

    paginate: collection(handle: $handle) {
      products(
        first: 250
        sortKey: $sortKey
        reverse: $reverse
        filters: $filters
      ) {
        edges {
          cursor
        }
      }
    }

    minPrice: collection(
      handle: $handle
    ) {
      products(
        first: 1
        sortKey: PRICE
        filters: $noPriceFilters
      ) {
        nodes {
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }

    maxPrice: collection(
      handle: $handle
    ) {
      products(
        first: 1
        sortKey: PRICE
        reverse: true
        filters: $noPriceFilters
      ) {
        nodes {
          priceRange {
            maxVariantPrice {
              amount
            }
          }
        }
      }
    }
  }

  ${PRODUCT_ITEM_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  ${FILTER_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
  ${PRICE_RANGE_FRAGMENT}
  ${MEDIA_FRAGMENT}
` as const;
