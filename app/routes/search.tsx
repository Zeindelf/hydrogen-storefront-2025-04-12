import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import type {MetaFunction} from '@shopify/remix-oxygen';

import {useLoaderData} from '@remix-run/react';
import {Analytics, flattenConnection} from '@shopify/hydrogen';

import {Breadcrumb} from '~/components/global/breadcrumb';
import {SEARCH_QUERY_PARAM} from '~/config/constants';
import {
  FILTER_FRAGMENT,
  MEDIA_FRAGMENT,
  PAGE_INFO_FRAGMENT,
  PRICE_RANGE_FRAGMENT,
  PRODUCT_ITEM_FRAGMENT,
  PRODUCT_VARIANT_FRAGMENT,
} from '~/graphql/storefront/fragments';
import {EmptySearch, SearchInput} from '~/pages/search';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {searchSeo} from '~/seo/search';
import {sanitize} from '~/utils/helpers';
import {
  createSearchVariables,
  getFilters,
  searchMessage,
} from '~/utils/shopify';

export const loader = async ({context, request}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const term = searchParams.get(SEARCH_QUERY_PARAM) || '';
  const variables = createSearchVariables(request, searchParams);
  const searchTerm = sanitize(term);

  const {maxPrice, minPrice, search} = await context.storefront.query(
    SEARCH_QUERY,
    {variables: {...variables, query: searchTerm}},
  );

  const {totalCount} = search;
  const products = flattenConnection(search);
  const _shouldGetRecommendations = !searchTerm || products.length === 0;

  const {filters} = getFilters({maxPrice, minPrice, products: search, request});

  const {listItems, seo} = searchSeo({request, searchTerm, totalCount});

  return {
    filters,
    listItems,
    search,
    searchTerm,
    seo,
    totalCount,
  };
};

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function SearchRoute() {
  const {listItems, search, searchTerm, totalCount} =
    useLoaderData<typeof loader>();

  if (!totalCount) {
    return (
      <>
        <Breadcrumb listItems={listItems} />

        <section className="container">
          <SearchInput searchTerm={searchTerm} />
          <EmptySearch searchTerm={searchTerm} />
        </section>

        <Analytics.SearchView data={{searchResults: [], searchTerm}} />
      </>
    );
  }

  const message = searchMessage(totalCount);

  return (
    <>
      <Breadcrumb listItems={listItems} />

      <section className="container">
        <search>
          <div className="flex flex-col items-center justify-center text-center text-sm">
            <p dangerouslySetInnerHTML={{__html: message}} />
            <h1 className="text-primary">{searchTerm}</h1>

            <SearchInput searchTerm={searchTerm} />
          </div>
        </search>
      </section>

      <Analytics.SearchView data={{searchResults: search, searchTerm}} />
    </>
  );
}

const SEARCH_QUERY = `#graphql
  query Search(
    $query: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $sortKey: SearchSortKeys
    $reverse: Boolean
    $filters: [ProductFilter!]
    $noPriceFilters: [ProductFilter!]
    $country: CountryCode
    $language: LanguageCode
    ) @inContext(country: $country, language: $language) {
    search(
      query: $query
      first: $first
      last: $last
      before: $startCursor
      after: $endCursor
      sortKey: $sortKey
      reverse: $reverse
      productFilters: $filters
      types: PRODUCT
    ) {
      totalCount
      pageInfo {
        ...PageInfo
      }
      filters: productFilters {
        ...Filter
      }
      nodes {
        ...ProductItem
      }
    }

    minPrice: search(
      query: $query
      productFilters: $noPriceFilters
      first: 1
      sortKey: PRICE
      types: PRODUCT
      ) {
      nodes {
        ... on Product {
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }

    maxPrice: search(
      query: $query
      productFilters: $noPriceFilters
      first: 1
      sortKey: PRICE
      reverse: true
      types: PRODUCT
      ) {
      nodes {
        ... on Product {
          priceRange {
            maxVariantPrice {
              amount
            }
          }
        }
      }
    }
  }

  ${PAGE_INFO_FRAGMENT}
  ${FILTER_FRAGMENT}
  ${PRODUCT_ITEM_FRAGMENT}
  ${PRICE_RANGE_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  ${MEDIA_FRAGMENT}
` as const;
