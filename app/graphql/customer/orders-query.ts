// https://shopify.dev/docs/api/customer/latest/objects/Order
export const ORDER_ITEM_FRAGMENT = `#graphql
  fragment OrderItem on Order {
    totalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillments(first: 1) {
      nodes {
        status
      }
    }
    lineItems(first: 6) {
      nodes {
        title
        variantId
        quantity
        image {
          altText
          url
        }
      }
    }
    id
    number
    processedAt
  }
` as const;

// https://shopify.dev/docs/api/customer/latest/objects/Customer
export const CUSTOMER_ORDERS_FRAGMENT = `#graphql
  fragment CustomerOrders on Customer {
    orders(
      query: $query
      sortKey: $sortKey,
      reverse: $reverse,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }

  ${ORDER_ITEM_FRAGMENT}
` as const;

// https://shopify.dev/docs/api/customer/latest/queries/customer
export const CUSTOMER_ORDERS_QUERY = `#graphql
  query CustomerOrders(
    $query: String
    $sortKey: OrderSortKeys = PROCESSED_AT
    $reverse: Boolean = true
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) {
    customer {
      ...CustomerOrders
    }
  }

  ${CUSTOMER_ORDERS_FRAGMENT}
` as const;
