import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './todo/index'
import { REACT_ROOT_ELEMENT_ID } from './index'

const render = () => {
  ReactDOM.render(
    <TodoApp />,
    document.getElementById(REACT_ROOT_ELEMENT_ID),
  )
}

export default render
