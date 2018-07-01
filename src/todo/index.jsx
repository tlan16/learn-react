import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components'

const store = configureStore()

const TodoApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default TodoApp
