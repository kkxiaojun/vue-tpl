// https://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended'
  ],
  'parserOptions':
    {
      "parser": "babel-eslint",
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
      }
    },
  // add your custom rules here
  rules: {
    // ...other codes
    'prettier/prettier': [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": true
      }],
    'vue/max-attributes-per-line': false,
    'vue/html-indent': false,
    'vue/require-prop-types': false,
    'vue/html-self-closing': false,
    'vue/html-closing-bracket-newline': false,
    'vue/no-template-shadow': false,
    'vue/singleline-html-element-content-newline': false,
    'vue/require-prop-type-constructor': false,
    'vue/html-closing-bracket-spacing': false,
    'quotes': [1, 'single'],
  }
}
