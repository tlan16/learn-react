import { connect } from 'react-redux'
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

const mapStateToProps = (state, props) => ({
  todos: getVisibleTodos(
    state.todos,
    props.filter,
  ),
})

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(
      toggleTodo(id),
    )
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
