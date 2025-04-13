import type {AppLoadContext} from '@shopify/remix-oxygen';
import type {SitemapBlogsQuery} from 'types/generated/storefront';
import type {PartialImage} from 'types/shopify';

import {kebabCase} from 'case-anything';

import type {SitemapField} from '~/lib/sitemap';

import {AUTHOR_PATH} from '~/config/constants';
import {
  GENERIC_FILE_FRAGMENT,
  MEDIA_FRAGMENT,
  METAFIELD_FRAGMENT,
} from '~/graphql/storefront/fragments';
import {createBlogUrl, parseMedia} from '~/utils/shopify';

import {createQuery, getImage, getResource} from './utils';

export const createBlogSitemap = async ({
  context,
  origin,
  sitemap,
}: {
  context: AppLoadContext;
  origin: string;
  sitemap: SitemapBlogsQuery['sitemap'];
}) => {
  const blogsQuery = createQuery(sitemap);
  const [{blogs}, {authors}] = await Promise.all([
    context.storefront.query(SEARCH_BLOGS_BY_HANDLE_QUERY, {
      variables: {query: blogsQuery},
    }),
    context.storefront.query(AUTHORS_INFO_SITEMAP_QUERY),
  ]);

  const mappedBlogs = blogs.nodes.map((blog) => {
    const image = parseMedia<PartialImage>(blog.blogImage?.reference);

    return {
      handle: blog.handle,
      image: {alt: image?.altText, filepath: image?.url},
      title: blog.title,
    };
  });

  const resources = getResource(sitemap, mappedBlogs);

  const authorsPage: SitemapField[] = [
    {
      changefreq: 'daily',
      lastmod: new Date().toISOString(),
      loc: createBlogUrl(AUTHOR_PATH, undefined, origin),
    },
  ];

  const authorsField = authors?.articles.nodes.map((node): SitemapField => {
    const author = node.authorV2;
    const slug = kebabCase(author?.name || '');
    const images: SitemapField['images'] = [
      {
        caption: `${author?.name} - ${context.shopify.name}`,
        loc: '',
        title: author?.name,
      },
    ];

    return {
      changefreq: 'daily',
      lastmod: new Date().toISOString(),
      loc: createBlogUrl(AUTHOR_PATH, slug, origin),
      ...(images && {images}),
    };
  });

  return [
    ...resources.map((item): SitemapField => {
      const {image, title} = item;
      const images = getImage(image, title, context.shopify);

      return {
        changefreq: 'daily',
        lastmod: item.updatedAt,
        loc: createBlogUrl(item.handle, undefined, origin),
        ...(images && {images}),
      };
    }),
    ...authorsPage,
    ...(authorsField || []),
  ];
};

export const BLOG_SITEMAP_QUERY = `#graphql
  query SitemapBlogs($page: Int!) {
    sitemap(type: BLOG) {
      resources(page: $page) {
        items {
          handle
          updatedAt
        }
      }
    }
  }
` as const;

const SEARCH_BLOGS_BY_HANDLE_QUERY = `#graphql
  query SearchBlogsByHandle(
    $query: String!
    $first: Int = 250
  ) {
    blogs(
      query: $query
      first: $first
    ) {
      nodes {
        handle
        title
        blogImage: metafield(namespace: "category", key: "image") {
          ...Metafield
        }
      }
    }
  }
  ${METAFIELD_FRAGMENT}
  ${MEDIA_FRAGMENT}
  ${GENERIC_FILE_FRAGMENT}
` as const;

const AUTHORS_INFO_SITEMAP_QUERY = `#graphql
  query AuthorsInfoSitemap {
    authors: blog(handle: "author") {
      articles(first: 250) {
        nodes {
          authorV2 {
            name
            email
          }
        }
      }
    }
  }
` as const;
