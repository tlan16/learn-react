import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addTodo } from '../actions'

class AddTodo extends Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate(),
    )
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
            addTodo(this.context.store, this.input.value)
            this.input.value = ''
          }}
        >Add Todo
        </button>
      </div>
    )
  }
}

AddTodo.contextTypes = {
  store: PropTypes.object,
}

export default AddTodo
