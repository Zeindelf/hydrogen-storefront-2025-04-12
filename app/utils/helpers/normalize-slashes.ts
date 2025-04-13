const TRIM_SLASHES_REGEXP = /\/$/g;
const PROTOCOL_REGEXP = /(?<!\b[a-z][a-z\d+\-.]{1,50}:)\/{2,}/g;

export const normalizeSlashes = (pathname: string) => {
  return pathname
    .replace(PROTOCOL_REGEXP, '/')
    .replace(TRIM_SLASHES_REGEXP, '');
};
