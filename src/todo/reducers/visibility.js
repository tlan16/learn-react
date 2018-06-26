import { SET_VISIBILITY_FILTER } from '../actions'

export const initialState = 'SHOW_ALL'

const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityReducer
