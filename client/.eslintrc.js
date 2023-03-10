export default {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'warn',
  },
  ignorePatterns: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
};
