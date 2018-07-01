import React from 'react'
import { Provider } from 'react-redux'
import AddTodo from './containers/addTodo'
import Footer from './components/footer'
import VisibleTodoList from './containers/visibleTodoList'
import { store } from './store'

const TodoApp = () => (
  <Provider store={store}>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>
)

export default TodoApp
