import { combineReducers } from 'redux'
import todosReducer from './todos'
import visibilityReducer from './visibility'

const appReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityReducer,
})

export default appReducer
