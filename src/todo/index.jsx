import uuid from 'uuid/v4'
import React, { Component } from 'react'
import { ADD_TODO } from './actions'

class TodoApp extends Component {
  render() {
    const { store, todos } = this.props

    return (
      <div>
        <button onClick={() => {
          store.dispatch({
            type: ADD_TODO,
            text: 'Test',
            id: uuid(),
          })
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
