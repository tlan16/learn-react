import React, { Component } from 'react'
import store from '../../store'
import { TOGGLE_TODO } from '../actions'
import TodoList from './todoList'

function getVisibleTodos(todos = [], filter) {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

function toggleTodo(id) {
  store.dispatch({
    type: TOGGLE_TODO,
    id,
  })
}

class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const state = store.getState()

    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter,
          )
        }
        onTodoClick={id =>
          toggleTodo(id)
        }
      />
    )
  }
}

export default VisibleTodoList
