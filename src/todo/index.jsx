import uuid from 'uuid/v4'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoApp extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    addTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
  }

  static defaultProps = {
    todos: [],
  }

  render() {
    const {
      todos,
      addTodo,
      toggleTodo,
    } = this.props

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
          addTodo({
            id: uuid(),
            text: this.input.value,
          })
          this.input.value = ''
        }}
        >
          Add Todo
        </button>

        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >{todo.text}
              <button onClick={() => {
                toggleTodo({
                    id: todo.id,
                })
            }}
              >Toggle
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoApp
