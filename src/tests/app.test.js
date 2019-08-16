const {app} = require('../app.jsx')

test('app is a callable function', () => {
  expect(typeof app).toBe('function')
})
