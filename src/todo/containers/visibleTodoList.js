import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodoList from '../components/todoList'
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../reducers'

const mapStateToProps = (
  state,
  {
    match: {
      params: {
        filter = 'all',
      },
    },
  },
) => ({
  todos: getVisibleTodos(
    state,
    filter,
  ),
})

export default withRouter(
  connect(
    mapStateToProps,
    {
      onTodoClick: toggleTodo,
    },
  )(TodoList),
)
