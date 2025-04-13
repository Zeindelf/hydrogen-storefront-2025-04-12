// NOTE: https://shopify.dev/docs/api/customer/latest/objects/Customer
export const CUSTOMER_FRAGMENT = `#graphql
  fragment OrderCard on Order {
    id
    number
    processedAt
    financialStatus
    fulfillments(first: 1) {
      nodes {
        status
      }
    }
    totalPrice {
      amount
      currencyCode
    }
    lineItems(first: 2) {
      edges {
        node {
          title
          image {
            altText
            height
            url
            width
          }
        }
      }
    }
  }
  fragment Customer on Customer {
    id
    firstName
    lastName
    phoneNumber {
      phoneNumber
    }
    emailAddress {
      emailAddress
    }
    defaultAddress {
      ...Address
    }
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
    orders(first: 250, sortKey: PROCESSED_AT, reverse: true) {
      edges {
        node {
          ...OrderCard
        }
      }
    }
  }

  fragment Address on CustomerAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    territoryCode
    zoneCode
    city
    zip
    phoneNumber
  }
` as const;

const WISHLIST_FRAGMENT = `#graphql
  fragment Wishlist on Metafield {
    type
    value
    jsonValue
    createdAt
    updatedAt
  }
`;

// NOTE: https://shopify.dev/docs/api/customer/latest/queries/customer
export const CUSTOMER_DETAILS_QUERY = `#graphql
  query CustomerDetails {
    customer {
      ...Customer
      wishlist: metafield(namespace: "customer", key: "wishlist") {
        ...Wishlist
      }
      metafields(identifiers:  [
        {key: "customer", namespace: "wishlist"},
        {key: "customer", namespace: "test_string"},
        {key: "customer", namespace: "test_strings"},
        {key: "custom", namespace: "custom_string"},
        {key: "custom", namespace: "custom_string"},
      ]) {
        ...Wishlist
      }
    }
  }
  ${CUSTOMER_FRAGMENT}
  ${WISHLIST_FRAGMENT}
` as const;

// export const GET_CUSTOMER_METAFIELDS = `#graphql
//   query CustomerMetafields($customerAccessToken: String!, $identifiers: [HasMetafieldsIdentifier!]!){
//     customer(customerAccessToken: $customerAccessToken) {
//       id
//       email
//       metafields (identifiers:$identifiers) {
//         id
//         key
//         type
//         value
//         namespace
//         jsonValue
//         compareDigest
//         createdAt
//         updatedAt
//       }
//     }
//   }
// `;
