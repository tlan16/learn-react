import { connect } from 'react-redux'
import TodoList from '../components/todoList'
import { toggleTodo } from '../actions'

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
  onTodoClick: id => toggleTodo(dispatch, id),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
