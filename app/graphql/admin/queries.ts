/** https://shopify.dev/docs/api/admin-graphql/latest/queries/shop */
export const ADMIN_SHOP_QUERY = `#graphql
  query AdminShop {
    adminShop: shop {
      billingAddress {
        address1
        address2
        city
        company
        coordinatesValidated
        country
        countryCodeV2
        formatted
        id
        latitude
        longitude
        phone
        province
        provinceCode
        zip
      }
      contactEmail
      ianaTimezone
      myshopifyDomain
      timezoneOffset
      unitSystem
      weightUnit
    }
  }
` as const;

export const POLICIES_QUERY = `#graphql
  query Policies {
    shop {
      shopPolicies {
        id
        title
        createdAt
        updatedAt
      }
    }
  }
` as const;

export const SEARCH_CUSTOMER_QUERY = `#graphql
  query SearchCustomers(
    $query: String!
    $first: Int = 1
    $last: Int
    $startCursor: String
    $endCursor: String
    $sortKey: CustomerSortKeys
    $reverse: Boolean
  ) {
    customers(
      query: $query
      first: $first
      last: $last
      before: $startCursor
      after: $endCursor
      sortKey:$sortKey
      reverse: $reverse
    ) {
      nodes {
        id
        validEmailAddress
      }
    }
  }
` as const;

export const GET_CUSTOMER_BY_ID = `#graphql
  fragment Wishlist on Metafield {
    type
    value
    jsonValue
    createdAt
    updatedAt
  }

  query GetCustomerById($id: ID!) {
    customer(id: $id) {
      id
      displayName
      email
      wishlist: metafield(namespace: "customer", key: "wishlist") {
        ...Wishlist
      }
      addresses {
        address1
        address2
        city
        company
        coordinatesValidated
        country
        countryCodeV2
        firstName
        formatted
        formattedArea
        id
        lastName
        latitude
        longitude
        name
        phone
        province
        provinceCode
        timeZone
        validationResultSummary
        zip
        __typename
      }
      amountSpent {
        amount
      }
      canDelete
      createdAt
      dataSaleOptOut
      displayName
      email
      firstName
      id
      image {
        altText
        height
        id
        url
        width
      }
      lastName
      lastOrder {
        id
      }
      legacyResourceId
      lifetimeDuration
      locale
      multipassIdentifier
      note
      numberOfOrders
      phone
      productSubscriberStatus
      phone
      productSubscriberStatus
      state
      tags
      taxExempt
      taxExemptions
      unsubscribeUrl
      updatedAt
      validEmailAddress
      verifiedEmail

      smsMarketingConsent {
        consentCollectedFrom
        consentUpdatedAt
        marketingOptInLevel
        marketingState
        __typename
      }
      emailMarketingConsent {
        consentUpdatedAt
        marketingOptInLevel
        marketingState
      }
    }
  }
`;
