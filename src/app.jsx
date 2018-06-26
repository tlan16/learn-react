import React from 'react'
import ReactDOM from 'react-dom'
import store from './todo/store'
import TodoApp from './todo/index'

const render = rootElement => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    rootElement,
    () => store.subscribe(render),
  )
}

export default render
