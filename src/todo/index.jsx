import React from 'react'
import AddTodo from './components/addTodo'
import Footer from './components/footer'
import VisibleTodoList from './components/visibleTodoList'

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp
