import uuid from 'uuid/v4'
import * as api from '../api'

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuid(),
  text,
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
})


export const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
})


export const fetchTodos = async (filter) => {
  const response = await api.fetchTodos(filter)
  return receiveTodos(filter, response)
}
