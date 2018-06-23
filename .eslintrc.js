module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': 'airbnb',
  'rules': {
    'semi': 'off',
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
  },
  'globals': {
    'test': true,
    'expect': true,
  },
}
