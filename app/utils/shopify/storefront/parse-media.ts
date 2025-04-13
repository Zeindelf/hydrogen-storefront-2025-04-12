import type {MetafieldReference} from '@shopify/hydrogen/storefront-api-types';

export const parseMedia = <ReturnType>(reference: any | MetafieldReference) => {
  if (!reference) return null;

  if (typeof reference === 'object' && !reference.__typename) {
    throw new Error(
      "parseMedia() requires the '__typename' property to exist on the 'reference' prop in order to render the matching sub-component for this type of media.",
    );
  }

  switch (reference.__typename) {
    case 'MediaImage': {
      if (!reference.image) {
        console.warn(
          "'reference.image' does not exist for __typename of 'MediaImage'; rendering 'null' by default.",
        );

        return null;
      }

      return {
        altText: reference.alt,
        id: reference.id,
        ...reference.image,
      } as ReturnType;
    }

    case 'Video': {
      return {video: reference} as ReturnType;
    }

    default: {
      return null;
    }
  }
};
