const VALID_SLUG_REGEXP = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const isSlug = (input?: string): boolean =>
  !!input && VALID_SLUG_REGEXP.test(input);
