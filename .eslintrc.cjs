/** @type {import("@types/eslint").Linter.BaseConfig} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    'plugin:hydrogen/recommended',
    'plugin:hydrogen/typescript',
    'plugin:tailwindcss/recommended',
    'plugin:perfectionist/recommended-alphabetical-legacy',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
    ],
    'hydrogen/prefer-image-component': 'off',
    'no-case-declarations': 'off',
    'no-console': ['warn', {allow: ['warn', 'error']}],
    'no-useless-escape': 'off',
    'perfectionist/sort-modules': 'off',
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'tailwindcss/no-custom-classname': 'off',
  },
};
