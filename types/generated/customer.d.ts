/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as CustomerAccountAPI from '@shopify/hydrogen/customer-account-api-types';

export type CustomerAddressUpdateMutationVariables = CustomerAccountAPI.Exact<{
  address: CustomerAccountAPI.CustomerAddressInput;
  addressId: CustomerAccountAPI.Scalars['ID']['input'];
  defaultAddress?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['Boolean']['input']
  >;
}>;

export type CustomerAddressUpdateMutation = {
  customerAddressUpdate?: CustomerAccountAPI.Maybe<{
    customerAddress?: CustomerAccountAPI.Maybe<
      Pick<CustomerAccountAPI.CustomerAddress, 'id'>
    >;
    userErrors: Array<
      Pick<
        CustomerAccountAPI.UserErrorsCustomerAddressUserErrors,
        'code' | 'field' | 'message'
      >
    >;
  }>;
};

export type CustomerAddressDeleteMutationVariables = CustomerAccountAPI.Exact<{
  addressId: CustomerAccountAPI.Scalars['ID']['input'];
}>;

export type CustomerAddressDeleteMutation = {
  customerAddressDelete?: CustomerAccountAPI.Maybe<
    Pick<
      CustomerAccountAPI.CustomerAddressDeletePayload,
      'deletedAddressId'
    > & {
      userErrors: Array<
        Pick<
          CustomerAccountAPI.UserErrorsCustomerAddressUserErrors,
          'code' | 'field' | 'message'
        >
      >;
    }
  >;
};

export type CustomerAddressCreateMutationVariables = CustomerAccountAPI.Exact<{
  address: CustomerAccountAPI.CustomerAddressInput;
  defaultAddress?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['Boolean']['input']
  >;
}>;

export type CustomerAddressCreateMutation = {
  customerAddressCreate?: CustomerAccountAPI.Maybe<{
    customerAddress?: CustomerAccountAPI.Maybe<
      Pick<CustomerAccountAPI.CustomerAddress, 'id'>
    >;
    userErrors: Array<
      Pick<
        CustomerAccountAPI.UserErrorsCustomerAddressUserErrors,
        'code' | 'field' | 'message'
      >
    >;
  }>;
};

export type OrderCardFragment = Pick<
  CustomerAccountAPI.Order,
  'id' | 'number' | 'processedAt' | 'financialStatus'
> & {
  fulfillments: {nodes: Array<Pick<CustomerAccountAPI.Fulfillment, 'status'>>};
  totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
  lineItems: {
    edges: Array<{
      node: Pick<CustomerAccountAPI.LineItem, 'title'> & {
        image?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.Image, 'altText' | 'height' | 'url' | 'width'>
        >;
      };
    }>;
  };
};

export type CustomerFragment = Pick<
  CustomerAccountAPI.Customer,
  'id' | 'firstName' | 'lastName'
> & {
  phoneNumber?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.CustomerPhoneNumber, 'phoneNumber'>
  >;
  emailAddress?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.CustomerEmailAddress, 'emailAddress'>
  >;
  defaultAddress?: CustomerAccountAPI.Maybe<
    Pick<
      CustomerAccountAPI.CustomerAddress,
      | 'id'
      | 'formatted'
      | 'firstName'
      | 'lastName'
      | 'company'
      | 'address1'
      | 'address2'
      | 'territoryCode'
      | 'zoneCode'
      | 'city'
      | 'zip'
      | 'phoneNumber'
    >
  >;
  addresses: {
    nodes: Array<
      Pick<
        CustomerAccountAPI.CustomerAddress,
        | 'id'
        | 'formatted'
        | 'firstName'
        | 'lastName'
        | 'company'
        | 'address1'
        | 'address2'
        | 'territoryCode'
        | 'zoneCode'
        | 'city'
        | 'zip'
        | 'phoneNumber'
      >
    >;
  };
  orders: {
    edges: Array<{
      node: Pick<
        CustomerAccountAPI.Order,
        'id' | 'number' | 'processedAt' | 'financialStatus'
      > & {
        fulfillments: {
          nodes: Array<Pick<CustomerAccountAPI.Fulfillment, 'status'>>;
        };
        totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
        lineItems: {
          edges: Array<{
            node: Pick<CustomerAccountAPI.LineItem, 'title'> & {
              image?: CustomerAccountAPI.Maybe<
                Pick<
                  CustomerAccountAPI.Image,
                  'altText' | 'height' | 'url' | 'width'
                >
              >;
            };
          }>;
        };
      };
    }>;
  };
};

export type AddressFragment = Pick<
  CustomerAccountAPI.CustomerAddress,
  | 'id'
  | 'formatted'
  | 'firstName'
  | 'lastName'
  | 'company'
  | 'address1'
  | 'address2'
  | 'territoryCode'
  | 'zoneCode'
  | 'city'
  | 'zip'
  | 'phoneNumber'
>;

export type WishlistFragment = Pick<
  CustomerAccountAPI.Metafield,
  'type' | 'value' | 'jsonValue' | 'createdAt' | 'updatedAt'
>;

export type CustomerDetailsQueryVariables = CustomerAccountAPI.Exact<{
  [key: string]: never;
}>;

export type CustomerDetailsQuery = {
  customer: Pick<
    CustomerAccountAPI.Customer,
    'id' | 'firstName' | 'lastName'
  > & {
    wishlist?: CustomerAccountAPI.Maybe<
      Pick<
        CustomerAccountAPI.Metafield,
        'type' | 'value' | 'jsonValue' | 'createdAt' | 'updatedAt'
      >
    >;
    metafields: Array<
      CustomerAccountAPI.Maybe<
        Pick<
          CustomerAccountAPI.Metafield,
          'type' | 'value' | 'jsonValue' | 'createdAt' | 'updatedAt'
        >
      >
    >;
    phoneNumber?: CustomerAccountAPI.Maybe<
      Pick<CustomerAccountAPI.CustomerPhoneNumber, 'phoneNumber'>
    >;
    emailAddress?: CustomerAccountAPI.Maybe<
      Pick<CustomerAccountAPI.CustomerEmailAddress, 'emailAddress'>
    >;
    defaultAddress?: CustomerAccountAPI.Maybe<
      Pick<
        CustomerAccountAPI.CustomerAddress,
        | 'id'
        | 'formatted'
        | 'firstName'
        | 'lastName'
        | 'company'
        | 'address1'
        | 'address2'
        | 'territoryCode'
        | 'zoneCode'
        | 'city'
        | 'zip'
        | 'phoneNumber'
      >
    >;
    addresses: {
      nodes: Array<
        Pick<
          CustomerAccountAPI.CustomerAddress,
          | 'id'
          | 'formatted'
          | 'firstName'
          | 'lastName'
          | 'company'
          | 'address1'
          | 'address2'
          | 'territoryCode'
          | 'zoneCode'
          | 'city'
          | 'zip'
          | 'phoneNumber'
        >
      >;
    };
    orders: {
      edges: Array<{
        node: Pick<
          CustomerAccountAPI.Order,
          'id' | 'number' | 'processedAt' | 'financialStatus'
        > & {
          fulfillments: {
            nodes: Array<Pick<CustomerAccountAPI.Fulfillment, 'status'>>;
          };
          totalPrice: Pick<
            CustomerAccountAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          lineItems: {
            edges: Array<{
              node: Pick<CustomerAccountAPI.LineItem, 'title'> & {
                image?: CustomerAccountAPI.Maybe<
                  Pick<
                    CustomerAccountAPI.Image,
                    'altText' | 'height' | 'url' | 'width'
                  >
                >;
              };
            }>;
          };
        };
      }>;
    };
  };
};

export type MetafieldsSetMutationVariables = CustomerAccountAPI.Exact<{
  metafields:
    | Array<CustomerAccountAPI.MetafieldsSetInput>
    | CustomerAccountAPI.MetafieldsSetInput;
}>;

export type MetafieldsSetMutation = {
  metafieldsSet?: CustomerAccountAPI.Maybe<{
    metafields?: CustomerAccountAPI.Maybe<
      Array<
        Pick<
          CustomerAccountAPI.Metafield,
          'key' | 'namespace' | 'value' | 'createdAt' | 'updatedAt'
        >
      >
    >;
    userErrors: Array<
      Pick<
        CustomerAccountAPI.MetafieldsSetUserError,
        'field' | 'message' | 'code'
      >
    >;
  }>;
};

export type OrderMoneyFragment = Pick<
  CustomerAccountAPI.MoneyV2,
  'amount' | 'currencyCode'
>;

export type DiscountApplicationFragment = {
  value:
    | ({__typename: 'MoneyV2'} & Pick<
        CustomerAccountAPI.MoneyV2,
        'amount' | 'currencyCode'
      >)
    | ({__typename: 'PricingPercentageValue'} & Pick<
        CustomerAccountAPI.PricingPercentageValue,
        'percentage'
      >);
};

export type OrderLineItemFullFragment = Pick<
  CustomerAccountAPI.LineItem,
  | 'id'
  | 'sku'
  | 'title'
  | 'quantity'
  | 'giftCard'
  | 'variantId'
  | 'variantTitle'
> & {
  price?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  image?: CustomerAccountAPI.Maybe<
    Pick<
      CustomerAccountAPI.Image,
      'altText' | 'height' | 'url' | 'id' | 'width'
    >
  >;
  variantOptions?: CustomerAccountAPI.Maybe<
    Array<Pick<CustomerAccountAPI.LineItemVariantOption, 'name' | 'value'>>
  >;
  discountAllocations: Array<{
    allocatedAmount: Pick<
      CustomerAccountAPI.MoneyV2,
      'amount' | 'currencyCode'
    >;
    discountApplication: {
      value:
        | ({__typename: 'MoneyV2'} & Pick<
            CustomerAccountAPI.MoneyV2,
            'amount' | 'currencyCode'
          >)
        | ({__typename: 'PricingPercentageValue'} & Pick<
            CustomerAccountAPI.PricingPercentageValue,
            'percentage'
          >);
    };
  }>;
  currentTotalPrice?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  totalDiscount: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
  totalPrice?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
};

export type OrderFragment = Pick<
  CustomerAccountAPI.Order,
  'id' | 'name' | 'statusPageUrl' | 'processedAt'
> & {
  fulfillments: {
    nodes: Array<
      Pick<
        CustomerAccountAPI.Fulfillment,
        'createdAt' | 'status' | 'isPickedUp' | 'latestShipmentStatus'
      > & {
        trackingInformation: Array<
          Pick<
            CustomerAccountAPI.TrackingInformation,
            'company' | 'number' | 'url'
          >
        >;
      }
    >;
  };
  totalTax?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
  subtotal?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  shippingAddress?: CustomerAccountAPI.Maybe<
    Pick<
      CustomerAccountAPI.CustomerAddress,
      'name' | 'formatted' | 'formattedArea'
    >
  >;
  discountApplications: {
    nodes: Array<{
      value:
        | ({__typename: 'MoneyV2'} & Pick<
            CustomerAccountAPI.MoneyV2,
            'amount' | 'currencyCode'
          >)
        | ({__typename: 'PricingPercentageValue'} & Pick<
            CustomerAccountAPI.PricingPercentageValue,
            'percentage'
          >);
    }>;
  };
  lineItems: {
    nodes: Array<
      Pick<
        CustomerAccountAPI.LineItem,
        | 'id'
        | 'sku'
        | 'title'
        | 'quantity'
        | 'giftCard'
        | 'variantId'
        | 'variantTitle'
      > & {
        price?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        image?: CustomerAccountAPI.Maybe<
          Pick<
            CustomerAccountAPI.Image,
            'altText' | 'height' | 'url' | 'id' | 'width'
          >
        >;
        variantOptions?: CustomerAccountAPI.Maybe<
          Array<
            Pick<CustomerAccountAPI.LineItemVariantOption, 'name' | 'value'>
          >
        >;
        discountAllocations: Array<{
          allocatedAmount: Pick<
            CustomerAccountAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          discountApplication: {
            value:
              | ({__typename: 'MoneyV2'} & Pick<
                  CustomerAccountAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >)
              | ({__typename: 'PricingPercentageValue'} & Pick<
                  CustomerAccountAPI.PricingPercentageValue,
                  'percentage'
                >);
          };
        }>;
        currentTotalPrice?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        totalDiscount: Pick<
          CustomerAccountAPI.MoneyV2,
          'amount' | 'currencyCode'
        >;
        totalPrice?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
      }
    >;
  };
};

export type OrderQueryVariables = CustomerAccountAPI.Exact<{
  orderId: CustomerAccountAPI.Scalars['ID']['input'];
}>;

export type OrderQuery = {
  order?: CustomerAccountAPI.Maybe<
    Pick<
      CustomerAccountAPI.Order,
      'id' | 'name' | 'statusPageUrl' | 'processedAt'
    > & {
      fulfillments: {
        nodes: Array<
          Pick<
            CustomerAccountAPI.Fulfillment,
            'createdAt' | 'status' | 'isPickedUp' | 'latestShipmentStatus'
          > & {
            trackingInformation: Array<
              Pick<
                CustomerAccountAPI.TrackingInformation,
                'company' | 'number' | 'url'
              >
            >;
          }
        >;
      };
      totalTax?: CustomerAccountAPI.Maybe<
        Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
      subtotal?: CustomerAccountAPI.Maybe<
        Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      shippingAddress?: CustomerAccountAPI.Maybe<
        Pick<
          CustomerAccountAPI.CustomerAddress,
          'name' | 'formatted' | 'formattedArea'
        >
      >;
      discountApplications: {
        nodes: Array<{
          value:
            | ({__typename: 'MoneyV2'} & Pick<
                CustomerAccountAPI.MoneyV2,
                'amount' | 'currencyCode'
              >)
            | ({__typename: 'PricingPercentageValue'} & Pick<
                CustomerAccountAPI.PricingPercentageValue,
                'percentage'
              >);
        }>;
      };
      lineItems: {
        nodes: Array<
          Pick<
            CustomerAccountAPI.LineItem,
            | 'id'
            | 'sku'
            | 'title'
            | 'quantity'
            | 'giftCard'
            | 'variantId'
            | 'variantTitle'
          > & {
            price?: CustomerAccountAPI.Maybe<
              Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            image?: CustomerAccountAPI.Maybe<
              Pick<
                CustomerAccountAPI.Image,
                'altText' | 'height' | 'url' | 'id' | 'width'
              >
            >;
            variantOptions?: CustomerAccountAPI.Maybe<
              Array<
                Pick<CustomerAccountAPI.LineItemVariantOption, 'name' | 'value'>
              >
            >;
            discountAllocations: Array<{
              allocatedAmount: Pick<
                CustomerAccountAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
              discountApplication: {
                value:
                  | ({__typename: 'MoneyV2'} & Pick<
                      CustomerAccountAPI.MoneyV2,
                      'amount' | 'currencyCode'
                    >)
                  | ({__typename: 'PricingPercentageValue'} & Pick<
                      CustomerAccountAPI.PricingPercentageValue,
                      'percentage'
                    >);
              };
            }>;
            currentTotalPrice?: CustomerAccountAPI.Maybe<
              Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            totalDiscount: Pick<
              CustomerAccountAPI.MoneyV2,
              'amount' | 'currencyCode'
            >;
            totalPrice?: CustomerAccountAPI.Maybe<
              Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
          }
        >;
      };
    }
  >;
};

export type OrderItemFragment = Pick<
  CustomerAccountAPI.Order,
  'financialStatus' | 'id' | 'number' | 'processedAt'
> & {
  totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
  fulfillments: {nodes: Array<Pick<CustomerAccountAPI.Fulfillment, 'status'>>};
  lineItems: {
    nodes: Array<
      Pick<CustomerAccountAPI.LineItem, 'title' | 'variantId' | 'quantity'> & {
        image?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.Image, 'altText' | 'url'>
        >;
      }
    >;
  };
};

export type CustomerOrdersFragment = {
  orders: {
    nodes: Array<
      Pick<
        CustomerAccountAPI.Order,
        'financialStatus' | 'id' | 'number' | 'processedAt'
      > & {
        totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
        fulfillments: {
          nodes: Array<Pick<CustomerAccountAPI.Fulfillment, 'status'>>;
        };
        lineItems: {
          nodes: Array<
            Pick<
              CustomerAccountAPI.LineItem,
              'title' | 'variantId' | 'quantity'
            > & {
              image?: CustomerAccountAPI.Maybe<
                Pick<CustomerAccountAPI.Image, 'altText' | 'url'>
              >;
            }
          >;
        };
      }
    >;
    pageInfo: Pick<
      CustomerAccountAPI.PageInfo,
      'hasPreviousPage' | 'hasNextPage' | 'endCursor' | 'startCursor'
    >;
  };
};

export type CustomerOrdersQueryVariables = CustomerAccountAPI.Exact<{
  query?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['String']['input']
  >;
  sortKey?: CustomerAccountAPI.InputMaybe<CustomerAccountAPI.OrderSortKeys>;
  reverse?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['Boolean']['input']
  >;
  first?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['Int']['input']
  >;
  last?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['Int']['input']
  >;
  startCursor?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['String']['input']
  >;
  endCursor?: CustomerAccountAPI.InputMaybe<
    CustomerAccountAPI.Scalars['String']['input']
  >;
}>;

export type CustomerOrdersQuery = {
  customer: {
    orders: {
      nodes: Array<
        Pick<
          CustomerAccountAPI.Order,
          'financialStatus' | 'id' | 'number' | 'processedAt'
        > & {
          totalPrice: Pick<
            CustomerAccountAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          fulfillments: {
            nodes: Array<Pick<CustomerAccountAPI.Fulfillment, 'status'>>;
          };
          lineItems: {
            nodes: Array<
              Pick<
                CustomerAccountAPI.LineItem,
                'title' | 'variantId' | 'quantity'
              > & {
                image?: CustomerAccountAPI.Maybe<
                  Pick<CustomerAccountAPI.Image, 'altText' | 'url'>
                >;
              }
            >;
          };
        }
      >;
      pageInfo: Pick<
        CustomerAccountAPI.PageInfo,
        'hasPreviousPage' | 'hasNextPage' | 'endCursor' | 'startCursor'
      >;
    };
  };
};

export type CustomerUpdateMutationVariables = CustomerAccountAPI.Exact<{
  customer: CustomerAccountAPI.CustomerUpdateInput;
}>;

export type CustomerUpdateMutation = {
  customerUpdate?: CustomerAccountAPI.Maybe<{
    customer?: CustomerAccountAPI.Maybe<
      Pick<CustomerAccountAPI.Customer, 'firstName' | 'lastName'> & {
        emailAddress?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.CustomerEmailAddress, 'emailAddress'>
        >;
        phoneNumber?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.CustomerPhoneNumber, 'phoneNumber'>
        >;
      }
    >;
    userErrors: Array<
      Pick<
        CustomerAccountAPI.UserErrorsCustomerUserErrors,
        'code' | 'field' | 'message'
      >
    >;
  }>;
};

interface GeneratedQueryTypes {
  '#graphql\n  query CustomerDetails {\n    customer {\n      ...Customer\n      wishlist: metafield(namespace: "customer", key: "wishlist") {\n        ...Wishlist\n      }\n      metafields(identifiers:  [\n        {key: "customer", namespace: "wishlist"},\n        {key: "customer", namespace: "test_string"},\n        {key: "customer", namespace: "test_strings"},\n        {key: "custom", namespace: "custom_string"},\n        {key: "custom", namespace: "custom_string"},\n      ]) {\n        ...Wishlist\n      }\n    }\n  }\n  #graphql\n  fragment OrderCard on Order {\n    id\n    number\n    processedAt\n    financialStatus\n    fulfillments(first: 1) {\n      nodes {\n        status\n      }\n    }\n    totalPrice {\n      amount\n      currencyCode\n    }\n    lineItems(first: 2) {\n      edges {\n        node {\n          title\n          image {\n            altText\n            height\n            url\n            width\n          }\n        }\n      }\n    }\n  }\n  fragment Customer on Customer {\n    id\n    firstName\n    lastName\n    phoneNumber {\n      phoneNumber\n    }\n    emailAddress {\n      emailAddress\n    }\n    defaultAddress {\n      ...Address\n    }\n    addresses(first: 6) {\n      nodes {\n        ...Address\n      }\n    }\n    orders(first: 250, sortKey: PROCESSED_AT, reverse: true) {\n      edges {\n        node {\n          ...OrderCard\n        }\n      }\n    }\n  }\n\n  fragment Address on CustomerAddress {\n    id\n    formatted\n    firstName\n    lastName\n    company\n    address1\n    address2\n    territoryCode\n    zoneCode\n    city\n    zip\n    phoneNumber\n  }\n\n  #graphql\n  fragment Wishlist on Metafield {\n    type\n    value\n    jsonValue\n    createdAt\n    updatedAt\n  }\n\n': {
    return: CustomerDetailsQuery;
    variables: CustomerDetailsQueryVariables;
  };
  '#graphql\n  fragment OrderMoney on MoneyV2 {\n    amount\n    currencyCode\n  }\n  fragment DiscountApplication on DiscountApplication {\n    value {\n      __typename\n      ... on MoneyV2 {\n        ...OrderMoney\n      }\n      ... on PricingPercentageValue {\n        percentage\n      }\n    }\n  }\n  fragment OrderLineItemFull on LineItem {\n    id\n    sku\n    title\n    quantity\n    giftCard\n    price {\n      ...OrderMoney\n    }\n    image {\n      altText\n      height\n      url\n      id\n      width\n    }\n    variantId\n    variantTitle\n    variantOptions {\n      name\n      value\n    }\n    discountAllocations {\n      allocatedAmount {\n        ...OrderMoney\n      }\n      discountApplication {\n        ...DiscountApplication\n      }\n    }\n    currentTotalPrice {\n      ...OrderMoney\n    }\n    totalDiscount {\n      ...OrderMoney\n    }\n    totalPrice {\n      ...OrderMoney\n    }\n  }\n  fragment Order on Order {\n    id\n    name\n    statusPageUrl\n    processedAt\n    fulfillments(first: 250) {\n      nodes {\n        createdAt\n        status\n        isPickedUp\n        latestShipmentStatus\n        trackingInformation {\n          company\n          number\n          url\n        }\n      }\n    }\n    totalTax {\n      ...OrderMoney\n    }\n    totalPrice {\n      ...OrderMoney\n    }\n    subtotal {\n      ...OrderMoney\n    }\n    shippingAddress {\n      name\n      formatted(withName: true)\n      formattedArea\n    }\n    discountApplications(first: 100) {\n      nodes {\n        ...DiscountApplication\n      }\n    }\n    lineItems(first: 100) {\n      nodes {\n        ...OrderLineItemFull\n      }\n    }\n  }\n  query Order($orderId: ID!) {\n    order(id: $orderId) {\n      ... on Order {\n        ...Order\n      }\n    }\n  }\n': {
    return: OrderQuery;
    variables: OrderQueryVariables;
  };
  '#graphql\n  query CustomerOrders(\n    $query: String\n    $sortKey: OrderSortKeys = PROCESSED_AT\n    $reverse: Boolean = true\n    $first: Int\n    $last: Int\n    $startCursor: String\n    $endCursor: String\n  ) {\n    customer {\n      ...CustomerOrders\n    }\n  }\n\n  #graphql\n  fragment CustomerOrders on Customer {\n    orders(\n      query: $query\n      sortKey: $sortKey,\n      reverse: $reverse,\n      first: $first,\n      last: $last,\n      before: $startCursor,\n      after: $endCursor\n    ) {\n      nodes {\n        ...OrderItem\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n\n  #graphql\n  fragment OrderItem on Order {\n    totalPrice {\n      amount\n      currencyCode\n    }\n    financialStatus\n    fulfillments(first: 1) {\n      nodes {\n        status\n      }\n    }\n    lineItems(first: 6) {\n      nodes {\n        title\n        variantId\n        quantity\n        image {\n          altText\n          url\n        }\n      }\n    }\n    id\n    number\n    processedAt\n  }\n\n\n': {
    return: CustomerOrdersQuery;
    variables: CustomerOrdersQueryVariables;
  };
}

interface GeneratedMutationTypes {
  '#graphql\n  mutation customerAddressUpdate(\n    $address: CustomerAddressInput!\n    $addressId: ID!\n    $defaultAddress: Boolean\n ) {\n    customerAddressUpdate(\n      address: $address\n      addressId: $addressId\n      defaultAddress: $defaultAddress\n    ) {\n      customerAddress {\n        id\n      }\n      userErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerAddressUpdateMutation;
    variables: CustomerAddressUpdateMutationVariables;
  };
  '#graphql\n  mutation customerAddressDelete(\n    $addressId: ID!,\n  ) {\n    customerAddressDelete(addressId: $addressId) {\n      deletedAddressId\n      userErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerAddressDeleteMutation;
    variables: CustomerAddressDeleteMutationVariables;
  };
  '#graphql\n  mutation customerAddressCreate(\n    $address: CustomerAddressInput!\n    $defaultAddress: Boolean\n  ) {\n    customerAddressCreate(\n      address: $address\n      defaultAddress: $defaultAddress\n    ) {\n      customerAddress {\n        id\n      }\n      userErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerAddressCreateMutation;
    variables: CustomerAddressCreateMutationVariables;
  };
  '#graphql\n  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {\n    metafieldsSet(metafields: $metafields) {\n      metafields {\n        key\n        namespace\n        value\n        createdAt\n        updatedAt\n      }\n      userErrors {\n        field\n        message\n        code\n      }\n    }\n  }\n': {
    return: MetafieldsSetMutation;
    variables: MetafieldsSetMutationVariables;
  };
  '#graphql\n  # https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate\n  mutation customerUpdate(\n    $customer: CustomerUpdateInput!\n  ){\n    customerUpdate(input: $customer) {\n      customer {\n        firstName\n        lastName\n        emailAddress {\n          emailAddress\n        }\n        phoneNumber {\n          phoneNumber\n        }\n      }\n      userErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n': {
    return: CustomerUpdateMutation;
    variables: CustomerUpdateMutationVariables;
  };
}

declare module '@shopify/hydrogen' {
  interface CustomerAccountQueries extends GeneratedQueryTypes {}
  interface CustomerAccountMutations extends GeneratedMutationTypes {}
}
