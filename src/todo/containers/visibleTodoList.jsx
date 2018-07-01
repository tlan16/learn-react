import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

class VisibleTodoList extends Component {
  static contextTypes = {
    store: PropTypes.object,
  }

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate(),
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { store } = this.context
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
          toggleTodo(store, id)
        }
      />
    )
  }
}

export default VisibleTodoList
