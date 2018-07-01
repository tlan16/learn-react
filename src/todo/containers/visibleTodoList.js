import { connect } from 'react-redux'
import TodoList from '../components/todoList'

const getVisibleTodos = (todos = [], filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter,
  ),
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch({
      type: 'TOGGLE_TODO',
      id,
    })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
