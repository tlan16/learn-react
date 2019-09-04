const {AppRouter} = require('../app.jsx')

test('app is a callable function', () => {
  expect(typeof AppRouter).toBe('function')
})
