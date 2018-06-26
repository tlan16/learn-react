import { combineReducers, createStore } from 'redux'
import todoAppReducers from './todo/reducers'

export const appReducer = combineReducers({
  ...todoAppReducers,
})

const store = createStore(
  appReducer, /* preloadedState, */
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
