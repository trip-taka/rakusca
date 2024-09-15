module.exports = {
  '*': ['secretlint'],
  '*.{json,css,scss}': ['biome format --write .'],
  '*.{js,cjs,mjs,ts,tsx}': ['biome check --write .'],
  '*.{ts,tsx}': ['bash -c tsc --noEmit', 'markuplint'],
};
