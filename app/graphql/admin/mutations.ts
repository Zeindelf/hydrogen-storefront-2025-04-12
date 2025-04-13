export const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation CustomerCreate(
    $input: CustomerInput!
  ) {
    customerCreate(input: $input) {
      customer {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

export const CUSTOMER_EMAIL_MARKETING_CONSENT = `#graphql
  mutation CustomerEmailMarketingConsentUpdate(
    $input: CustomerEmailMarketingConsentUpdateInput!
  ) {
    customerEmailMarketingConsentUpdate(input: $input) {
      customer {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

/**
 Hi, I did a quick check and it doesn’t appear that your metafields have sufficient access via the Customer Account API.
As a note, if you’re running GraphiQL via the dev console, this is running queries against the Admin API which has a different access control from a metafield standpoint.
You can take a look here for updating access via the Admin API, or you can change the access level via the Admin UI by navigating to the metafield definition under settings and updating the “Customer account access” dropdown.
 */

/**
  https://shopify.dev/docs/api/admin-graphql/2024-10/mutations/metafieldDefinitionUpdate#argument-definition

  Variables: (customer wishlist example)
  {
    definition: {
      name: "Wishlist",
      namespace: "customer",
      key: "wishlist",
      ownerType: "CUSTOMER",
      access: {
        admin: "PUBLIC_READ_WRITE",
        customerAccount: "READ_WRITE",
        storefront: "PUBLIC_READ"
      }
    }
  }
 */
export const METAFIELD_ACCESS_SCOPE = `#graphql
  mutation UpdateMetafieldDefinition(
    $definition: MetafieldDefinitionUpdateInput!
  ) {
    metafieldDefinitionUpdate(
      definition: $definition
    ) {
      updatedDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }
`;

export const METAOBJECT_UPSERT = `#graphql
  mutation metaobjectUpsert($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
    metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
      metaobject {
        id
        handle
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;
