import React, { Component } from 'react'
import { addTodo } from '../actions/index'

class AddTodo extends Component {
  input = undefined

  render() {
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
            addTodo(this.input.value)
            this.input.value = ''
          }}
        >Add Todo
        </button>
      </div>
    )
  }
}

export default AddTodo
