import {Script} from '@shopify/hydrogen';

import {jsonLdStringify, mimetypes} from '~/utils/helpers';

export const JsonSchema = ({
  jsonLd,
  nonce,
  scriptId,
  scriptKey,
}: {
  jsonLd?: any | any[] | undefined;
  nonce?: string;
  scriptId?: string;
  scriptKey?: string;
}) => {
  if (!jsonLd || !Object.keys(jsonLd).length) {
    return null;
  }

  return (
    <Script
      dangerouslySetInnerHTML={{__html: jsonLdStringify(jsonLd)}}
      id={scriptId}
      key={`jsonld-${scriptKey}`}
      nonce={nonce}
      type={mimetypes.jsonLd}
    />
  );
};
