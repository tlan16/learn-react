import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

const TodoList = ({
  todos,
  onTodoClick,
}) =>
  <ul>
    {
    todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />,
    )
  }
  </ul>

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList
