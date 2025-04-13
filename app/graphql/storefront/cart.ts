/**
 * NOTE: https://shopify.dev/docs/api/storefront/latest/queries/cart
 * cartQueryFragment requirements:
 *
 * - Must be named `CartApiQuery`
 * - Only have access to the following query variables:
 *   - $cartId: ID!
 *   - $country: CountryCode
 *   - $language: LanguageCode
 *   - $numCartLines: Int
 **/
export const CART_QUERY_FRAGMENT = `#graphql
  fragment CartApiMoney on MoneyV2 {
    currencyCode
    amount
  }

  fragment CartLine on CartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...CartApiMoney
      }
      amountPerQuantity {
        ...CartApiMoney
      }
      compareAtAmountPerQuantity {
        ...CartApiMoney
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...CartApiMoney
        }
        price {
          ...CartApiMoney
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height

        }
        product {
          handle
          title
          id
          vendor
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }

  fragment CartLineComponent on ComponentizableCartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...CartApiMoney
      }
      amountPerQuantity {
        ...CartApiMoney
      }
      compareAtAmountPerQuantity {
        ...CartApiMoney
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...CartApiMoney
        }
        price {
          ...CartApiMoney
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height
        }
        product {
          handle
          title
          id
          vendor
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }

  fragment CartApiQuery on Cart {
    updatedAt
    id
    appliedGiftCards {
      lastCharacters
      amountUsed {
        ...CartApiMoney
      }
    }
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      nodes {
        ...CartLine
      }
      nodes {
        ...CartLineComponent
      }
    }
    cost {
      subtotalAmount {
        ...CartApiMoney
      }
      totalAmount {
        ...CartApiMoney
      }
      totalDutyAmount {
        ...CartApiMoney
      }
      totalTaxAmount {
        ...CartApiMoney
      }
      checkoutChargeAmount {
        ...CartApiMoney
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
      applicable
    }
    discountAllocations {
      discountedAmount {
        amount
        currencyCode
      }
    }
  }
` as const;
