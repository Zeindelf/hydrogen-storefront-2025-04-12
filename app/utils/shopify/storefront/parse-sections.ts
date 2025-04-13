import {parseMetafield} from '@shopify/hydrogen';

import {parseJSON} from '~/utils/helpers';

export type MetafieldLink = {
  text: string;
  url: string;
};

/**
 * Recursively parse metafields (objects containing a type, value and key)
 * into a more usable format. Removes nested reference and references keys.
 */
export function parseSection<InputType, ReturnType>(_section: InputType) {
  const section = _section;
  const parsed = {} as Record<string, any>;

  // Parse each key in the section
  for (const key in section) {
    const node = section[key];

    if (typeof node === 'object') {
      // @ts-ignore
      const isMetafield = node?.type && node?.value;
      const isArray = Array.isArray(node);

      if (isArray) {
        if (key === 'fields') {
          parsed[key] = node.map((item) => parseMetafield(item as any));
        } else {
          parsed[key] = node.map((item) => parseSection(item));
        }
      } else if (isMetafield) {
        parsed[key] = parseMetafieldValue(node);
      } else if (node && Object.keys(node as object).length > 0) {
        parsed[key] = parseSection(node);
      } else {
        delete parsed[key];
      }
    } else {
      parsed[key] = node;
    }
  }
  return parsed as ReturnType & typeof section;
}

function parseMetafieldValue(metafield: Record<string, any>) {
  switch (metafield?.type) {
    case 'link':
      return {
        ...metafield,
        parsedValue: parseJSON(metafield.value ?? ''),
      };

    case 'list.mixed_reference':
    case 'mixed_reference': {
      return metafield;
    }

    default: {
      return parseMetafield(metafield);
    }
  }
}
