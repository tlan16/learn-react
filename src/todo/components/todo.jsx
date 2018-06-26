import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({
  onClick,
  completed,
  text,
}) =>
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >{text}
    <button onClick={onClick}>Toggle
    </button>
  </li>

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
