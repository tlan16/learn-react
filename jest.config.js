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
  ],
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  }
}
