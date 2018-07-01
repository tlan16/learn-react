import uuid from 'uuid/v4'

export const addTodo = (store, text) => {
  store.dispatch({
    type: 'ADD_TODO',
    id: uuid(),
    text,
  })
}

export const setVisibility = (store, filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  })
}

export const toggleTodo = (store, id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id,
  })
}
