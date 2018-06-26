import uuid from 'uuid/v4'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import store from '../store'
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from './actions'

class TodoApp extends Component {
  static addTodo = todo => {
    store.dispatch({
      type: ADD_TODO,
      ...todo,
    })
  }

  static toggleTodo = todo => {
    store.dispatch({
      type: TOGGLE_TODO,
      ...todo,
    })
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    visibilityFilter: PropTypes.string.isRequired,
  }

  static setVisibility = filter => {
    store.dispatch({
      type: SET_VISIBILITY_FILTER,
      filter,
    })
  }

  static getVisibleTodos = (todos = [], filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      default:
        return todos
    }
  }

  render() {
    const {
      todos,
      visibilityFilter,
    } = this.props

    const visibleTodos = TodoApp.getVisibleTodos(todos, visibilityFilter)

    return (
      <div>
        <input
          type="text"
          ref={node => {
            this.input = node
          }}
        />
        <button
          onClick={() => {
          TodoApp.addTodo({
            id: uuid(),
            text: this.input.value,
          })
          this.input.value = ''
        }}
        >
          Add Todo
        </button>

        <ul>
          {visibleTodos.map(todo => (
            <li
              key={todo.id}
              style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >{todo.text}
              <button onClick={() => {
                TodoApp.toggleTodo({
                  id: todo.id,
                })
            }}
              >Toggle
              </button>
            </li>
          ))}
        </ul>

        <p>
          Show:
          {' '}
          <FilterLink
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
          >All
          </FilterLink>
          {' '}
          <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
          >Active
          </FilterLink>
          {' '}
          <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
          >Completed
          </FilterLink>
        </p>
      </div>
    )
  }
}

const FilterLink = ({ filter, currentFilter, children }) =>
  <button
    disabled={filter === currentFilter}
    onClick={e => {
    e.preventDefault()
    TodoApp.setVisibility(filter)
  }}
  >{children}
  </button>

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default TodoApp
