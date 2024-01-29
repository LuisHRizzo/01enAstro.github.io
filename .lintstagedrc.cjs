module.exports = {
  '*.{js,jsx,ts,tsx,cjs,mjs}': 'eslint --fix',
  //'**/*.ts?(x)': () => 'pnpm build-types',
  '*.{css,astro}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,cjs,mjs,md}': 'prettier --ignore-unknown --write'
}
