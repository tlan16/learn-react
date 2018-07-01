import uuid from 'uuid/v4'
import store from '../../store'

export const addTodo = text => {
  store.dispatch({
    type: 'ADD_TODO',
    id: uuid(),
    text,
  })
}

export const setVisibility = filter => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  })
}

export const toggleTodo = id => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id,
  })
}
