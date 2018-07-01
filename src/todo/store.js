import { createStore } from 'redux'
import todoAppReducers from './reducers'

const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false,
  }],
}

export const store = createStore(
  todoAppReducers,
  persistedState,
)
