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
