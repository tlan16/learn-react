import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import TodoApp from './todo/index'
import { REACT_ROOT_ELEMENT_ID } from './index'
import Provider from './provider'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById(REACT_ROOT_ELEMENT_ID),
  )
}

export default render
