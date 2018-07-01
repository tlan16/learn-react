import React from 'react'
import PropTypes from 'prop-types'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodoList'
import Footer from './footer'

const App = ({ match: { params: { filter } } }) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={filter}
    />
    <Footer />
  </div>
)

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string,
    }),
  }),
}

App.defaultProps = {
  match: {
    params: {
      filter: 'all',
    },
  },
}

export default App
