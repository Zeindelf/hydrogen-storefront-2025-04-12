import type {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';

import {useLoaderData} from '@remix-run/react';
import {getPaginationVariables} from '@shopify/hydrogen';

import {Breadcrumb} from '~/components/global/breadcrumb';
import {Prose} from '~/components/ui/prose';
import {
  ARTICLE_AUTHOR_FRAGMENT,
  ARTICLE_COMMENT_FRAGMENT,
  ARTICLE_ITEM_FRAGMENT,
  PAGE_INFO_FRAGMENT,
} from '~/graphql/storefront/fragments';
import {articleSeo} from '~/seo/article';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {notFound} from '~/utils/helpers';
import {generateNodeCursor} from '~/utils/shopify';

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

const loadCriticalData = async (args: LoaderFunctionArgs) => {
  const {context, params, request} = args;
  const {shopify, storefront, storeUrl} = context;
  const {articleHandle, blogHandle} = params;
  const paginationVariables = getPaginationVariables(request, {pageBy: 1});

  if (!articleHandle || !blogHandle) {
    throw notFound('Article not found');
  }

  const [data] = await Promise.all([
    storefront.query(ARTICLE_QUERY, {
      variables: {articleHandle, blogHandle, ...paginationVariables},
    }),
  ]);

  const article = data.blog?.articleByHandle;

  if (!article) throw notFound();

  const {author, blog} = article;
  const cursor = generateNodeCursor(article.id);

  const [adjacent] = await Promise.all([
    storefront.query(ADJACENT_ARTICLES_QUERY, {
      variables: {cursor},
    }),
  ]);

  const {listItems, seo} = articleSeo({article, request, shopify});

  return {
    adjacent,
    article,
    author,
    blog,
    listItems,
    seo,
    storeUrl,
  };
};

const loadDeferredData = (_: LoaderFunctionArgs) => ({});

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function ArticleRoute() {
  const {article, listItems} = useLoaderData<typeof loader>();

  return (
    <>
      <Breadcrumb listItems={listItems} />

      <section className="container">
        <h1 className="my-3 text-center">{article.title}</h1>
      </section>

      <section className="container">
        <article className="my-5">
          <Prose html={article.contentHtml} />
        </article>
      </section>
    </>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog#field-blog-articlebyhandle
const ARTICLE_QUERY = `#graphql
  query Article(
    $articleHandle: String!
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $reverse: Boolean
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        ...ArticleItem
        comments(
          first: $first
          last: $last
          before: $startCursor
          after: $endCursor
          reverse: $reverse
        ) {
          nodes {
            ...ArticleComment
          }
          pageInfo {
            ...PageInfo
          }
        }
      }
    }
  }
  ${ARTICLE_ITEM_FRAGMENT}
  ${ARTICLE_AUTHOR_FRAGMENT}
  ${ARTICLE_COMMENT_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
` as const;

export const ADJACENT_ARTICLES_QUERY = `#graphql
  fragment AdjacentArticle on Article {
    title
    handle
    blog {
      title
      handle
    }
  }

  query AdjacentArticles(
    $query: String = "NOT author"
    $cursor: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    previous: articles(
      query: $query
      before: $cursor
      last: 1
    ) {
      nodes {
        ...AdjacentArticle
      }
    }
    next: articles(
      query: $query
      after: $cursor
      first: 1
    ) {
      nodes {
        ...AdjacentArticle
      }
    }
  }
` as const;
