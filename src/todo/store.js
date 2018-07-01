import { createStore } from 'redux'
import throttle from 'lodash.throttle'
import todoAppReducers from './reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const store = createStore(
  todoAppReducers,
  persistedState,
)

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  })
}, 1000))

export default store
