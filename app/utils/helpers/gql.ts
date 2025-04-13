export function minifyQuery<T extends string>(string: T) {
  return string
    .replace(/\s*#.*$/gm, '') // Remove GQL comments
    .replace(/\s+/gm, ' ') // Minify spaces
    .trim() as T;
}

export function graphqlRequestBody(query: string, variables?: any) {
  return JSON.stringify({query, variables});
}
