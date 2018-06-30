import React from 'react'
import uuid from 'uuid/v4'
import store from '../../store'
import { ADD_TODO } from '../actions'

const addTodo = text => {
  store.dispatch({
    type: ADD_TODO,
    id: uuid(),
    text,
  })
}

const AddTodo = () => {
  let input

  return (
    <div>
      <input
        type="text"
        ref={node => {
        input = node
      }}
      />
      <button
        onClick={() => {
        addTodo(input.value)
        input.value = ''
      }}
      >Add Todo
      </button>
    </div>
  )
}

export default AddTodo
