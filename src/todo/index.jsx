import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddTodo from './containers/addTodo'
import Footer from './components/footer'
import VisibleTodoList from './containers/visibleTodoList'
import todoAppReducers from './reducers'

const store = createStore(todoAppReducers)

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
