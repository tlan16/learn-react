import { ADD_TODO, TOGGLE_TODO } from '../actions'

export const initialState = {}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }

    case TOGGLE_TODO:
      return {
        ...state,
        completed: state.id === action.id,
      }

    default:
      return state
  }
}

export default todoReducer
