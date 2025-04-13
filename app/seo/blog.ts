import type {SeoConfig} from '@shopify/hydrogen';
import type {ArticleAuthor, Blog} from '@shopify/hydrogen/storefront-api-types';
import type {Blog as BlogSchema, WithContext} from 'schema-dts';
import type {
  ArticleItemFragment,
  BlogCategoryQuery,
} from 'types/generated/storefront';
import type {PartialImage} from 'types/shopify';

import {kebabCase} from 'case-anything';

import {truncate} from '~/utils/helpers';
import {createBlogUrl, parseMedia} from '~/utils/shopify';

import {type BreadcrumbItem} from './breadcrumb';
import {createMedia} from './media';
import {createRobots} from './robots';

interface BlogMetadataArgs {
  blog?: BlogCategoryQuery['blog'];
  request: Request;
}

const createBlogMetadata = (args: BlogMetadataArgs) => {
  const {blog, request} = args;
  const title = truncate(blog?.blogSeo?.title || blog?.title);
  const description = truncate(blog?.blogSeo?.description || blog?.title);
  const image = parseMedia<PartialImage>(blog?.blogImage?.reference);

  const {robots} = createRobots();
  const {media} = createMedia(image);

  const blogMetadata: SeoConfig = {
    description,
    media,
    robots,
    title,

    url: request.url,
  };

  return {blogMetadata};
};

type BlogBreadcrumbArgs = {
  article?: ArticleItemFragment | null;
  author?: ArticleAuthor | null;
  blog?: null | Pick<Blog, 'handle' | 'title'>;
};

export const createBlogBreadcrumb = (args?: BlogBreadcrumbArgs) => {
  const blog = args?.blog;
  const article = args?.article;
  const author = args?.author;

  const blogItemBase = {
    ariaLabel: 'Ir até o Blog',
    pathname: createBlogUrl(),
    title: 'Blog',
  };

  const listItems: BreadcrumbItem[] = [
    blogItemBase,
    ...(blog
      ? [
          {
            ariaLabel: blog.title,
            pathname: createBlogUrl(blog.handle),
            title: blog.title,
          },
        ]
      : []),
    ...(article
      ? [
          {
            ariaLabel: article.title,
            pathname: createBlogUrl(blog?.handle, article.handle),
            title: article.title,
          },
        ]
      : []),
    ...(author
      ? [
          {
            ariaLabel: 'Página de autores',
            pathname: createBlogUrl('author'),
            title: 'Autor',
          },
          {
            ariaLabel: author.name,
            pathname: createBlogUrl('author', kebabCase(author.name)),
            title: author.name,
          },
        ]
      : []),
  ];

  return {listItems};
};

const createBlogSchema = (args: BlogMetadataArgs) => {
  const {blog, request} = args;
  const itemListElement: BlogSchema['mainEntity'] = blog?.articles.nodes.map(
    (article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: createBlogUrl(blog.handle, article.handle),
    }),
  );

  const blogSchema: WithContext<BlogSchema> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    description: blog?.blogSeo?.description || '',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement,
    },
    name: blog?.blogSeo?.title || blog?.title || '',
    url: request.url,
  };

  return {blogSchema};
};

interface BlogSeoArgs extends BlogMetadataArgs {}

export const blogSeo = (args: BlogSeoArgs) => {
  const {blog} = args;
  const {blogMetadata} = createBlogMetadata(args);
  const {listItems} = createBlogBreadcrumb({blog});

  const {blogSchema} = createBlogSchema(args);

  const seo: SeoConfig = {...blogMetadata};
  const jsonLd = [blogSchema];

  return {jsonLd, listItems, seo};
};
