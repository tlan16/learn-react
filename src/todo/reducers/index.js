import { combineReducers } from 'redux'
import todosReducer, { getVisibleTodos as visibleTodosSelector } from './todos'

const todoAppReducers = combineReducers({
  todos: todosReducer,
})

export default todoAppReducers

export const getVisibleTodos = (state, filter) => visibleTodosSelector(state.todos, filter)
