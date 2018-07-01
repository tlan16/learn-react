import React from 'react'
import { createStore } from 'redux'
import AddTodo from './containers/addTodo'
import Footer from './components/footer'
import VisibleTodoList from './containers/visibleTodoList'
import Provider from './provider'
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
