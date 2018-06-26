import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import TodoApp from './todo/index'
import { REACT_ROOT_ELEMENT_ID } from './index'
import { ADD_TODO, TOGGLE_TODO } from './todo/actions'

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
      addTodo={payload =>
          store.dispatch({
              ...payload,
              type: ADD_TODO,
          })
      }
      toggleTodo={payload =>
          store.dispatch({
              ...payload,
              type: TOGGLE_TODO,
          })
      }
    />,
    document.getElementById(REACT_ROOT_ELEMENT_ID),
    () => store.subscribe(render),
  )
}

export default render
