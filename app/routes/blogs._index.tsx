import type {SeoConfig} from '@shopify/hydrogen';
import type {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';

import {useLoaderData} from '@remix-run/react';
import {getPaginationVariables} from '@shopify/hydrogen';

import {Breadcrumb} from '~/components/global/breadcrumb';
import {
  ARTICLE_AUTHOR_FRAGMENT,
  ARTICLE_ITEM_FRAGMENT,
  BLOG_FRAGMENT,
  GENERIC_FILE_FRAGMENT,
  MEDIA_FRAGMENT,
  METAFIELD_FRAGMENT,
  PAGE_INFO_FRAGMENT,
} from '~/graphql/storefront/fragments';
import {createBlogBreadcrumb} from '~/seo/blog';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context, request}: LoaderFunctionArgs) {
  const {shopify, storefront} = context;
  const paginationVariables = getPaginationVariables(request, {pageBy: 10});

  const [{blogs}, {featured, latest}] = await Promise.all([
    storefront.query(BLOG_CATEGORIES_QUERY, {
      variables: {...paginationVariables},
    }),
    storefront.query(HOME_BLOG_QUERY, {variables: {featured: 6, latest: 12}}),
  ]);

  const {listItems} = createBlogBreadcrumb();

  const seo: SeoConfig = {
    description: `Todos os posts do Blog da ${shopify.name}`,
    title: `Blog da ${shopify.name}`,
  };

  return {blogs, featured, latest, listItems, seo};
}

function loadDeferredData(_: LoaderFunctionArgs) {
  return {};
}

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function BlogsRoute() {
  const {listItems} = useLoaderData<typeof loader>();

  return (
    <>
      <Breadcrumb listItems={listItems} />

      <section className="container">BLOGS</section>
    </>
  );
}

const HOME_BLOG_QUERY = `#graphql
  query HomeBlog(
    $query: String = "NOT author"
    $featured: Int
    $latest: Int
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    featured: articles(
      query: $query
      first: $featured
      sortKey: RELEVANCE
    ) {
      nodes {
        ...ArticleItem
      }
    }
    latest: articles(
      query: $query
      first: $latest
      sortKey: PUBLISHED_AT
      reverse: true
    ) {
      nodes {
        ...ArticleItem
      }
    }
  }
  ${ARTICLE_ITEM_FRAGMENT}
  ${ARTICLE_AUTHOR_FRAGMENT}
` as const;

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog
const BLOG_CATEGORIES_QUERY = `#graphql
  query BlogCategories(
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blogs(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
      query: "NOT author"
    ) {
      categories: nodes {
        ...Blog
        articles(
          first: 250
        ) {
          countArticles: nodes {
            __typename
          }
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
  ${BLOG_FRAGMENT}
  ${METAFIELD_FRAGMENT}
  ${GENERIC_FILE_FRAGMENT}
  ${MEDIA_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
` as const;
