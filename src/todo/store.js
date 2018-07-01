import { createStore } from 'redux'
import todoAppReducers from './reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const store = createStore(
  todoAppReducers,
  persistedState,
)

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  })
})

export default store
