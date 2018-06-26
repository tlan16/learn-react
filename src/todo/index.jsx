import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import store from '../store'
import { ADD_TODO, TOGGLE_TODO } from './actions'
import TodoList from './components/todoList'
import AddTodo from './components/addTodo'
import Footer from './components/footer'

const addTodo = text => {
  store.dispatch({
    type: ADD_TODO,
    id: uuid(),
    text,
  })
}

const toggleTodo = id => {
  store.dispatch({
    type: TOGGLE_TODO,
    id,
  })
}

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

const TodoApp = ({
  todos,
  visibilityFilter,
}) => (
  <div>
    <AddTodo onAddClick={addTodo} />
    <TodoList
      todos={
        getVisibleTodos(todos, visibilityFilter)
      }
      onTodoClick={toggleTodo}
    />
    <Footer />
  </div>
)

TodoApp.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
}

export default TodoApp
