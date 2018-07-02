/* eslint-disable no-console */
import { createStore } from 'redux'
import todoAppReducers from './reducers'

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch
  if (!console.group) { return rawDispatch }

  return (action) => {
    console.group(action.type)
    console.log('%c previous state', 'color: grey', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState)
    console.groupEnd(action.type)
    return returnValue
  }
}

const configureStore = () => {
  const store = createStore(
    todoAppReducers,
    undefined,
    process.env.NODE_ENV !== 'production'
      // eslint-disable-next-line no-underscore-dangle
      ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      : undefined,
  )

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  return store
}

export default configureStore
