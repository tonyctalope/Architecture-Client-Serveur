/** @type {import("prettier").Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
};
