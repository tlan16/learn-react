import { ADD_TODO, TOGGLE_TODO } from '../actions'
import todoReducer from './todo'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todoReducer(undefined, action),
      ]

    case TOGGLE_TODO:
      return state.map(todo => todoReducer(todo, action))

    default:
      return state
  }
}

export default todosReducer
