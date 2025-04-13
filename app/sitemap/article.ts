import type {AppLoadContext} from '@shopify/remix-oxygen';
import type {SitemapArticlesQuery} from 'types/generated/storefront';

import type {SitemapField} from '~/lib/sitemap';

import {createBlogUrl} from '~/utils/shopify';

import {createQuery, getImage, getResource} from './utils';

export const createArticleSitemap = async ({
  context,
  origin,
  sitemap,
}: {
  context: AppLoadContext;
  origin: string;
  sitemap: SitemapArticlesQuery['sitemap'];
}) => {
  const articlesQuery = createQuery(sitemap);
  const {articles} = await context.storefront.query(
    SEARCH_ARTICLES_BY_HANDLE_QUERY,
    {variables: {query: articlesQuery}},
  );

  const resources = getResource(sitemap, articles.nodes);

  return resources.map((item): SitemapField => {
    const {image, title} = item;
    const images = getImage(image, title, context.shopify);

    return {
      changefreq: 'daily',
      lastmod: item.updatedAt,
      loc: createBlogUrl((item as any).blog.handle, item.handle, origin),
      ...(images && {images}),
    };
  });
};

export const ARTICLE_SITEMAP_QUERY = `#graphql
    query SitemapArticles($page: Int!) {
      sitemap(type: ARTICLE) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
` as const;

const SEARCH_ARTICLES_BY_HANDLE_QUERY = `#graphql
  query SearchArticleByHandle($query: String) {
    articles(
      query: $query
      first: 250
    ) {
      nodes {
        handle
        title
        blog {
          handle
        }
        image {
          alt: altText
          filepath: url
        }
      }
    }
  }
` as const;
