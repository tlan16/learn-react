import React from 'react'
import store from '../../store'
import TodoList from '../components/todoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos = [], filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const VisibleTodoList = () => {
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

export default VisibleTodoList
