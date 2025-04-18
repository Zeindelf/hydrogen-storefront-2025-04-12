// Some of the code below is borrowed from react-schemaorg
// https://github.com/google/react-schemaorg/blob/main/src/json-ld.tsx#L173
type JsonValueScalar = boolean | number | string;

type JsonValue =
  | {[key: PropertyKey]: JsonValue}
  | Array<JsonValue>
  | JsonValueScalar;
type JsonReplacer = (_: string, value: JsonValue) => JsonValue | undefined;

const ESCAPE_ENTITIES = Object.freeze({
  "'": '&apos;',
  '"': '&quot;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
});

const ESCAPE_REGEX = new RegExp(
  `[${Object.keys(ESCAPE_ENTITIES).join('')}]`,
  'g',
);

const ESCAPE_REPLACER = (t: string): string =>
  ESCAPE_ENTITIES[t as keyof typeof ESCAPE_ENTITIES];

function isNever(_: never): void {}

/**
 * A replacer for JSON.stringify to strip JSON-LD of illegal HTML entities
 * per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
 */
const safeJsonLdReplacer: JsonReplacer = (() => {
  // Replace per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
  // Solution from https://stackoverflow.com/a/5499821/864313
  return (_: string, value: JsonValue): JsonValue | undefined => {
    switch (typeof value) {
      case 'bigint':
      case 'boolean':
      case 'number':
        return value; // These values are not risky.
      case 'object':
        // Omit null values.
        if (value === null) {
          return undefined;
        }

        return value; // JSON.stringify will recursively call replacer.
      case 'string':
        return value.replace(ESCAPE_REGEX, ESCAPE_REPLACER);
      default: {
        // We shouldn't expect other types.
        isNever(value);

        // JSON.stringify will remove this element.
        return undefined;
      }
    }
  };
})();

export const jsonLdStringify = (data: any) =>
  JSON.stringify(data, safeJsonLdReplacer);
