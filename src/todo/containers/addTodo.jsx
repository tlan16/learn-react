import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
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
          addTodo(dispatch, input.value)
          input.value = ''
        }}
      >Add Todo
      </button>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AddTodo)
