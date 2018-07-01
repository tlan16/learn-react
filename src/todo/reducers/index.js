import { combineReducers } from 'redux'
import todosReducer from './todos'
import visibilityReducer from './visibility'

const todoAppReducers = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityReducer,
})

export default todoAppReducers
