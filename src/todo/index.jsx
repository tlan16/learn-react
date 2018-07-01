import React from 'react'
import AddTodo from './containers/addTodo'
import Footer from './components/footer'
import VisibleTodoList from './containers/visibleTodoList'

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp
