module.exports = {
  bail: true,
  verbose: true,
  'testMatch': [
    '**/?(*.)(spec|test).js?(x)',
    '**/test/**/*.js?(x)'
  ],
  'testPathIgnorePatterns': [
    '/node_modules/',
    '/config/'
  ]
}
