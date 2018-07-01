import todoReducer from './todo'

export const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todoReducer(undefined, action),
      ]

    case 'TOGGLE_TODO':
      return state.map(todo => todoReducer(todo, action))

    default:
      return state
  }
}

export default todosReducer
