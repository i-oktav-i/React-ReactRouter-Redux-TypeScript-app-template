module.exports = {
  parser:        '@typescript-eslint/parser',
  extends:       ['airbnb'],
  plugins:       ['react', '@typescript-eslint', 'react-hooks'],
  parserOptions: {
    sourceType:   'module',
    ecmaVersion:  2020,
    ecmaFeatures: {
      jsx: true,
    },

  },
  rules: {
    'lines-between-class-members':             ['error', 'always', { exceptAfterSingleLine: true }],
    'react/react-in-jsx-scope':                0,
    'jsx-a11y/click-events-have-key-events':   0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-filename-extension':            ['error', { extensions: ['.tsx'] }],
    'react/prop-types':                        0,
    'import/no-unresolved':                    0,
    'no-unused-vars':                          0,
    'import/prefer-default-export':            0,
    'import/no-extraneous-dependencies':       0,
    'no-plusplus':                             ['error', { allowForLoopAfterthoughts: true }],
    '@typescript-eslint/no-unused-vars':       2,
    'react-hooks/rules-of-hooks':              'error',
    'react-hooks/exhaustive-deps':             'warn',
    'react/jsx-key':                           'error',
    'arrow-parens':                            [2, 'as-needed'],
    'import/extensions':                       0,
    'key-spacing':                             ['warn', {
      singleLine: {
        beforeColon: false,
        afterColon:  true,
      },
      multiLine: {
        beforeColon: false,
        afterColon:  true,
        align:       'value',
      },
    }],
    'react/jsx-props-no-spreading':            0,
    'no-use-before-define':                    'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  globals: {
    document: true,
    window:   true,
  },
};
