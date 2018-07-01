import { combineReducers } from 'redux'
import todosReducer, { getVisibleTodos as visibleTodosSelector } from './todos'
import visibilityReducer from './visibility'

const todoAppReducers = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityReducer,
})

export default todoAppReducers

export const getVisibleTodos = (state, filter) => visibleTodosSelector(state.todos, filter)
