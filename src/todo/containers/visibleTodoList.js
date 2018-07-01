import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodoList from '../components/todoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos = [], filter) => {
  switch (filter) {
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

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
    state.todos,
    filter,
  ),
})

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(
      toggleTodo(id),
    )
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoList),
)
