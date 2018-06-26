import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import TodoApp from './todo/index'
import { REACT_ROOT_ELEMENT_ID } from './index'


const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById(REACT_ROOT_ELEMENT_ID),
    () => store.subscribe(render),
  )
}

export default render
