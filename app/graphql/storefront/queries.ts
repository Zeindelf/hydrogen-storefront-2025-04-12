import {
  ARTICLE_AUTHOR_FRAGMENT,
  ARTICLE_ITEM_FRAGMENT,
  GENERIC_FILE_FRAGMENT,
  MEDIA_FRAGMENT,
  MENU_FRAGMENT,
  METAFIELD_FRAGMENT,
  METAOBJECT_FIELD_FRAGMENT,
  PAGE_INFO_FRAGMENT,
} from './fragments';

export const SHOP_QUERY = `#graphql
  fragment ShopMediaImage on MediaImage {
    id
    image {
      altText
      height
      id
      url
      width
    }
  }

  query Shop(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    shop {
      id
      name
      description
      primaryDomain {
        host
        url
      }
      brand {
        shortDescription
        slogan
        logo {
          ...ShopMediaImage
        }
        coverImage {
          ...ShopMediaImage
        }
      }
      paymentSettings {
        countryCode
        currencyCode
      }
    }
  }
` as const;

export const LOCATION_QUERY = `#graphql
  query Location(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    localization {
      country {
        currency {
          isoCode
          name
          symbol
        }
        isoCode
        name
        unitSystem
      }
      language {
        endonymName
        isoCode
        name
      }
      market {
        handle
        id
      }
    }
  }
` as const;

export const STORE_QUERY = `#graphql
  query StoreContent {
    store: metaobject(handle: {type: "store", handle: "store"}) {
      id
      type
      name: field(key: "name") {
        ...MetaobjectField
      }
      description: field(key: "description") {
        ...MetaobjectField
      }
    }
  }
  ${METAOBJECT_FIELD_FRAGMENT}
  ${MEDIA_FRAGMENT}
  ${GENERIC_FILE_FRAGMENT}
` as const;

export const FOOTER_QUERY = `#graphql
  query FooterContent {
    footer: metaobject(handle: {type: "footer", handle: "footer"}) {
      id
      type
      name: field(key: "name") {
        ...MetaobjectField
      }
      description: field(key: "description") {
        ...MetaobjectField
      }
      copyright: field(key: "copyright") {
        ...MetaobjectField
      }
      payments: field(key: "payments") {
        ...MetaobjectField
      }
      socialMedia: field(key: "social_media") {
        references(first: 250) {
          nodes {
            ... on Metaobject {
              fields {
                ...MetaobjectField
              }
            }
          }
        }
      }
    }
  }
  ${METAOBJECT_FIELD_FRAGMENT}
  ${MEDIA_FRAGMENT}
  ${GENERIC_FILE_FRAGMENT}
` as const;

export const MENU_QUERY = `#graphql
  query Menu(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    menu(
      handle: $handle
    ) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
` as const;

export const ARTICLES_QUERY = `#graphql
  query Articles(
    $query: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $sortKey: ArticleSortKeys
    $reverse: Boolean
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    articles(
      query: $query
      first: $first
      last: $last
      before: $startCursor
      after: $endCursor
      reverse: $reverse
      sortKey: $sortKey
    ) {
      nodes {
        ...ArticleItem
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
  ${ARTICLE_ITEM_FRAGMENT}
  ${ARTICLE_AUTHOR_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
` as const;

export const AUTHOR_INFO_QUERY = `#graphql
  fragment AuthorInfo on Metaobject {
    jobTitle: field(key: "job_title") {
      ...MetaobjectField
    }
    location: field(key: "location") {
      ...MetaobjectField
    }
    shortDescription: field(key: "short_description") {
      ...MetaobjectField
    }
  }

  query AuthorInfo(
    $authorHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    authorInfo: blog(handle: "author") {
      articleByHandle(handle: $authorHandle) {
        author: authorV2 {
          ...ArticleAuthor
        }
        info: metafield(namespace: "author" key: "info") {
          ...Metafield
          reference {
            ... on Metaobject {
              type
              ...AuthorInfo
            }
          }
        }
        socials: metafield(namespace: "author" key: "socials") {
          ...Metafield
          references(first: 250) {
            nodes {
              ... on Metaobject {
                fields {
                  ...MetaobjectField
                }
              }
            }
          }
        }
      }
    }
  }
  ${ARTICLE_AUTHOR_FRAGMENT}
  ${METAFIELD_FRAGMENT}
  ${GENERIC_FILE_FRAGMENT}
  ${MEDIA_FRAGMENT}
  ${METAOBJECT_FIELD_FRAGMENT}
` as const;
