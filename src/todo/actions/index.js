import uuid from 'uuid/v4'

export const addTodo = (dispatch, text) => {
  dispatch({
    type: 'ADD_TODO',
    id: uuid(),
    text,
  })
}

export const setVisibility = (dispatch, filter) => {
  dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  })
}

export const toggleTodo = (dispatch, id) => {
  dispatch({
    type: 'TOGGLE_TODO',
    id,
  })
}
