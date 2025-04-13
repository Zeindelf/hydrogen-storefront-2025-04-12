/** https://shopify.dev/docs/api/customer/2025-01/mutations/metafieldsSet */
export const METAFIELDS_SET = `#graphql
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
      }
      userErrors {
        field
        message
        code
      }
    }
  }
` as const;

/**
{
  "metafields": [
    {
      "key": "nickname",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Customer/624407574",
      "type": "single_line_text_field",
      "value": "Big Tuna"
    },
    {
      "key": "title",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Customer/624407574",
      "type": "single_line_text_field",
      "value": "Dr."
    }
  ]
}
*/
