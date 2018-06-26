import todosReducer from './todos'
import visibilityReducer from './visibility'

const todoAppReducers = {
  todos: todosReducer,
  visibilityFilter: visibilityReducer,
}

export default todoAppReducers
