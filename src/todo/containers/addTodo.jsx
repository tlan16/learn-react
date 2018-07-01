import React, { Component } from 'react'
import { addTodo } from '../actions/index'
import store from '../../store'

class AddTodo extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

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
