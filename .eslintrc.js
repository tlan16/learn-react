module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  "parser": "babel-eslint",
  'extends': 'airbnb',
  'rules': {
    'semi': 'off',
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'comma-dangle': 'warn',
    'function-paren-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
  },
  'globals': {
    'test': true,
    'expect': true,
  },
}
