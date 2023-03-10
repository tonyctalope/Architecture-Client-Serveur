/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  singleQuote: true,
  trailingComma: "es5",
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
};