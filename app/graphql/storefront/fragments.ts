export const FILTER_FRAGMENT = `#graphql
  fragment Filter on Filter{
    id
    label
    type
    values {
      id
      label
      count
      input
      swatch {
      color
      image {
          ...Media
        }
      }
    }
  }
` as const;

export const GENERIC_FILE_FRAGMENT = `#graphql
  fragment GenericFile on GenericFile {
    ... on GenericFile {
      id
      url
      mimeType
      originalFileSize
    }
  }
` as const;

export const LINK_FRAGMENT = `#graphql
  fragment Link on MetaobjectField {
    ... on MetaobjectField {
      reference {
        ...on Metaobject {
          href: field(key: "href") {
            value
          }
          target: field(key: "target") {
            value
          }
          text: field(key: "text") {
            value
          }
        }
      }
    }
  }
` as const;

export const SITEMAP_IMAGE_FRAGMENT = `#graphql
  fragment SitemapImage on Image {
    alt: altText
    filepath: url
  }
` as const;

export const MEDIA_FRAGMENT = `#graphql
  fragment Media on Media {
    __typename
    alt
    mediaContentType
    previewImage {
      __typename
      altText
      url
    }
    ... on MediaImage {
      __typename
      id
      image {
        __typename
        altText
        url
        width
        height
      }
    }
    ... on Video {
      __typename
      id
      sources {
        __typename
        format
        mimeType
        url
      }
    }
    ... on Model3d {
      __typename
      id
      sources {
        __typename
        format
        filesize
        mimeType
        url
      }
    }
    ... on ExternalVideo {
      __typename
      alt
      embedUrl
      host
      id
      originUrl
      previewImage {
        altText
        height
        id
        url
        width
      }
    }
  }
` as const;

export const MENU_FRAGMENT = `#graphql
  fragment Menu on Menu {
    __typename
    id
    title
    items {
      ...ParentMenuItem
    }
  }

  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      __typename
      ...ChildMenuItem
    }
  }

  fragment ChildMenuItem on MenuItem {
    ...MenuItem
    items {
      __typename
      ...SubChildMenuItem
    }
  }

  fragment SubChildMenuItem on MenuItem {
    ...MenuItem
  }

  fragment MenuItem on MenuItem {
    __typename
    id
    title
    type
    url
    tags
    resourceId
    resource {
      ...MenuItemResource
    }
  }

  fragment MenuImage on Image {
    altText
    height
    id
    url
    width
    __typename
  }

  fragment MenuCollection on Collection {
    __typename
    id
    title
    handle
    image {
      ...MenuImage
    }
  }

  fragment MenuProduct on Product {
    __typename
    id
    title
    handle
    images(first: 1) {
      nodes {
        ...MenuImage
      }
    }
  }

  fragment MenuBlog on Blog {
    __typename
    id
    title
    handle
    articles(first: 1) {
      nodes {
        ...MenuArticle
      }
    }
  }

  fragment MenuArticle on Article {
    __typename
    id
    title
    handle
    blog {
      handle
    }
    image {
      ...MenuImage
    }
  }

  fragment MenuPage on Page {
    __typename
    id
    title
    handle
  }

  fragment MenuShopPolicy on ShopPolicy {
    __typename
    id
    title
    handle
  }

  fragment MenuItemResource on MenuItemResource {
    ... on Collection {
      ...MenuCollection
    }
    ... on Product {
      ...MenuProduct
    }
    ... on Blog {
      ...MenuBlog
    }
    ... on Article {
      ...MenuArticle
    }
    ... on Page {
      ...MenuPage
    }
    ... on ShopPolicy {
      ...MenuShopPolicy
    }
  }
` as const;

export const METAFIELD_FRAGMENT = `#graphql
  fragment Metafield on Metafield {
    id
    key
    type
    value
    reference {
      ...Media
      ...GenericFile
    }
  }
`;

export const METAOBJECT_FIELD_FRAGMENT = `#graphql
  fragment MetaobjectField on MetaobjectField {
    key
    type
    value
    reference {
      ...Media
      ...GenericFile
    }
  }
`;

export const PAGE_INFO_FRAGMENT = `#graphql
  fragment PageInfo on PageInfo {
    startCursor
    endCursor
    hasPreviousPage
    hasNextPage
  }
` as const;

export const PRICE_RANGE_FRAGMENT = `#graphql
  fragment PriceRange on Product {
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
  }
` as const;

export const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment ProductItem on Product {
    id
    handle
    title
    tags
    vendor
    createdAt
    updatedAt
    featuredImage {
      __typename
      altText
      height
      id
      url
      width
    }
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
    selectedOrFirstAvailableVariant(ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants {
      ...ProductVariant
    }
    ...PriceRange
  }
` as const;

export const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    id
    sku
    title
    barcode
    availableForSale
    quantityAvailable
    compareAtPrice {
      amount
      currencyCode
    }
    image {
      __typename
      altText
      height
      id
      url
      width
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

export const BLOG_FRAGMENT = `#graphql
  fragment Blog on Blog {
    id
    handle
    title
    blogSeo: seo {
      title
      description
    }
    blogImage: metafield(namespace: "category", key: "image") {
      ...Metafield
    }
    blogDescription: metafield(namespace: "category", key: "description") {
      ...Metafield
    }
  }
` as const;

export const ARTICLE_AUTHOR_FRAGMENT = `#graphql
  fragment ArticleAuthor on ArticleAuthor {
    name
    email
    firstName
    lastName
    bio
  }
` as const;

export const ARTICLE_COMMENT_FRAGMENT = `#graphql
  fragment ArticleComment on Comment {
    id
    content
    contentHtml
    author {
      email
      name
    }
  }
` as const;

export const ARTICLE_ITEM_FRAGMENT = `#graphql
  fragment ArticleItem on Article {
    id
    handle
    title
    tags
    excerpt
    contentHtml
    excerptHtml
    publishedAt
    trackingParameters
    blog {
      id
      handle
      title
    }
    image {
      __typename
      altText
      height
      id
      url
      width
    }
    author: authorV2 {
      ...ArticleAuthor
    }
    articleSeo: seo {
      title
      description
    }
    countComments: comments(first: 250) {
      nodes {
        __typename
      }
    }
  }
` as const;
