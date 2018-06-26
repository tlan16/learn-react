import uuid from 'uuid/v4'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoApp extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    addTodo: PropTypes.func.isRequired,
  }

  static defaultProps = {
    todos: [],
  }

  render() {
    const {
      todos,
      addTodo,
    } = this.props

    return (
      <div>
        <input
          type="text"
          ref={node => {
            this.input = node
          }}
        />
        <button onClick={() => {
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
          {todos.map(todo =>
            // eslint-disable-next-line comma-dangle
            <li key={todo.id}>{todo.text}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default TodoApp
