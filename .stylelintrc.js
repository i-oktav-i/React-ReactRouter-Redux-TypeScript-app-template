module.exports = {
  plugins: [
    'stylelint-csstree-validator',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: [
    '**/*.tsx',
  ],
  rules: {
    'function-url-quotes':               'always',
    'string-quotes':                     'double',
    'no-empty-source':                   null,
    'at-rule-no-unknown':                null,
    'no-descending-specificity':         null,
    'selector-list-comma-newline-after': null,
    'color-hex-length':                  'short',
    'value-keyword-case':                null,
  },
};
