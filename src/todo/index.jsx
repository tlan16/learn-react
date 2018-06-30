import React from 'react'
import uuid from 'uuid/v4'
import store from '../store'
import { ADD_TODO } from './actions'
import AddTodo from './components/addTodo'
import Footer from './components/footer'
import VisibleTodoList from './components/visibleTodoList'

const addTodo = text => {
  store.dispatch({
    type: ADD_TODO,
    id: uuid(),
    text,
  })
}

const TodoApp = () => (
  <div>
    <AddTodo onAddClick={addTodo} />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp
