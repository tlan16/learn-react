import React from 'react'
import ReactDOM from 'react-dom'
import store from './todo/store'
import { REACT_ROOT_DIV_ID } from './index'
import TodoApp from './todo/index'

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById(REACT_ROOT_DIV_ID),
  )
}

const app = () => {
  store.subscribe(render)
  render()
}

export default app
