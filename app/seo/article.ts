import type {SeoConfig} from '@shopify/hydrogen';
import type {Article, WithContext} from 'schema-dts';
import type {ArticleItemFragment} from 'types/generated/storefront';
import type {Shopify} from 'types/shopify';

import {kebabCase} from 'case-anything';

import {truncate} from '~/utils/helpers';
import {createBlogUrl} from '~/utils/shopify';

import {createBlogBreadcrumb} from './blog';
import {createMedia} from './media';
import {createRobots} from './robots';

type ArticleMetadataArgs = {
  article: ArticleItemFragment;
  request: Request;
  shopify: Shopify;
};

const createArticleMetadata = (args: ArticleMetadataArgs) => {
  const {article, request} = args;
  const title = truncate(article.articleSeo?.title || article.title);
  const description = truncate(
    article.articleSeo?.description || article.excerpt || article.contentHtml,
  );

  const {robots} = createRobots();
  const {media} = createMedia(article.image);

  const _publishedTime = new Date(article.publishedAt).toISOString();
  const _authors = [String(article.author?.name)];

  const articleMetadata: SeoConfig = {
    description,
    media,
    robots,
    title,
    url: request.url,
  };

  return {articleMetadata};
};

const createArticleSchema = (args: ArticleMetadataArgs) => {
  const {article, request, shopify} = args;
  const publishedAt = new Date(article!.publishedAt).toISOString();
  const {origin} = new URL(request.url);
  const authorHandle = kebabCase(article?.author?.name || '');

  const articleSchema: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    alternativeHeadline: article!.title,
    articleBody: article!.contentHtml,
    author: {
      '@type': 'Person',
      name: article.author?.name ?? article.author?.firstName,
      url: createBlogUrl('author', authorHandle, origin),
    },
    datePublished: publishedAt,
    description: truncate(
      article?.articleSeo?.description || article?.excerpt || '',
    ),
    headline: article?.articleSeo?.title || '',
    image: article?.image?.url,
    inLanguage: shopify.language,
    mainEntity: {
      '@id': request.url,
      '@type': 'WebPage',
    },
    potentialAction: [
      {
        '@type': 'ReadAction',
        target: [request.url],
      },
    ],
    publisher: {
      '@type': 'Organization',
      logo: {
        '@type': 'ImageObject',
        url: `${origin}/img/logo.png`,
      },
      name: shopify.name,
    },
    url: request.url,
  };

  return {articleSchema};
};

interface ArticleSeoArgs extends ArticleMetadataArgs {}

export const articleSeo = (args: ArticleSeoArgs) => {
  const {article, request, shopify} = args;
  const {articleMetadata} = createArticleMetadata({article, request, shopify});
  const {listItems} = createBlogBreadcrumb({article, blog: article.blog});

  const {articleSchema} = createArticleSchema({article, request, shopify});

  const seo: SeoConfig = {...articleMetadata};
  const jsonLd = [articleSchema];

  return {jsonLd, listItems, seo};
};
