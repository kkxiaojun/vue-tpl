var path = require('path');
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      "modules": true,
    }
  },
  extends: [
    '@i61/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  globals: {
    'use': 'error',
    'window': 'error',
    'document': true,
    'process': true,
    'module': true,
    '__dirname': true,
    'require': true
  },
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    'vue/max-attributes-per-line': [2, {
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/name-property-casing': ['error', 'PascalCase'],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './compile/webpack.dev.js')
      }
    }
  }
};
