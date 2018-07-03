import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import TodoList from '../components/todoList'
import * as actions from '../actions'
import { getVisibleTodos } from '../reducers'

class VisibleTodoList extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
  }

  render() {
    const { toggleTodo, ...rest } = this.props
    return (
      <TodoList
        {...rest}
        onTodoClick={toggleTodo}
      />
    )
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
    state,
    filter,
  ),
  filter,
})

export default withRouter(
  connect(
    mapStateToProps,
    actions,
  )(VisibleTodoList),
)
