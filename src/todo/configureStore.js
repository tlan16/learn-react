/* eslint-disable no-console */
import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import todoAppReducers from './reducers'

const getMiddlewares = () => {
  const middlewares = [promise]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return middlewares
}

const getEnhancer = (middlewares) => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  return composeEnhancers(
    applyMiddleware(...middlewares),
  )
}

const configureStore = () => createStore(
  todoAppReducers,
  getEnhancer(getMiddlewares()),
)

export default configureStore
