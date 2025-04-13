import {parseGid} from '@shopify/hydrogen';

/**
 * @param shopifyId  gid://shopify/Product/123456789012
 */
export const generateNodeCursor = (shopifyId: number | string) => {
  const {id: gid} = parseGid(String(shopifyId));
  const id = Number(gid);

  return btoa(JSON.stringify({last_id: id, last_value: id}));
};
