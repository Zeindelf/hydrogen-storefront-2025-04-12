import {mimetypes} from '~/utils/helpers';

/** Send XML response */
export const withXMLResponse = (content: string, headers = {}) => {
  return new Response(content, {
    headers: {
      'Cache-Control': `max-age=${60 * 60 * 24}`,
      'Content-Type': mimetypes.xml,
      ...headers,
    },
    status: 200,
  });
};
