import type {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';

import {useLoaderData} from '@remix-run/react';
import {flattenConnection, getPaginationVariables} from '@shopify/hydrogen';

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
import {blogSeo} from '~/seo/blog';
import {JsonSchema} from '~/seo/json-schema';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {logger, notFound} from '~/utils/helpers';

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

async function loadCriticalData(args: LoaderFunctionArgs) {
  const {context, params, request} = args;
  const paginationVariables = getPaginationVariables(request, {pageBy: 6});

  if (!params.blogHandle) {
    throw notFound('Blog not found');
  }

  const [{blog}] = await Promise.all([
    context.storefront.query(BLOG_CATEGORY_QUERY, {
      variables: {
        blogHandle: params.blogHandle,
        ...paginationVariables,
      },
    }),
  ]);

  if (!blog?.articles) throw notFound('Blog not found');

  const {jsonLd, listItems, seo} = blogSeo({blog, request});
  const articles = flattenConnection(blog.articles);

  return {articles, blog, jsonLd, listItems, seo};
}

function loadDeferredData(_: LoaderFunctionArgs) {
  return {};
}

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function BlogRoute() {
  const {articles, blog, jsonLd, listItems} = useLoaderData<typeof loader>();

  logger.log({articles});

  return (
    <>
      <JsonSchema jsonLd={jsonLd} />
      <Breadcrumb listItems={listItems} />

      <section className="container">
        <header className="mb-10 flex flex-col items-center justify-center">
          <hgroup className="text-center">
            <h1>{blog.blogSeo?.title || blog.title}</h1>
            {blog.blogSeo?.description && <p>{blog.blogSeo?.description}</p>}
          </hgroup>
        </header>
      </section>
    </>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog
const BLOG_CATEGORY_QUERY = `#graphql
  query BlogCategory(
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    blog(handle: $blogHandle) {
      ...Blog
      articles(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ArticleItem
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
  ${BLOG_FRAGMENT}
  ${METAFIELD_FRAGMENT}
  ${GENERIC_FILE_FRAGMENT}
  ${MEDIA_FRAGMENT}
  ${ARTICLE_ITEM_FRAGMENT}
  ${ARTICLE_AUTHOR_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
` as const;
