/** Stringify the key/value pairs of an object into a query string. */
export const encodeParameters = (obj: {
  [key: PropertyKey]: boolean | number | string;
}) =>
  Object.entries(obj)
    .map((kv) => kv.map(encodeURIComponent).join('='))
    .join('&');
