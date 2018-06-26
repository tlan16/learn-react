import { combineReducers, createStore } from 'redux'
import todoAppReducers from './todo/reducers'

const appReducer = combineReducers({
  ...todoAppReducers,
})

const store = createStore(appReducer)

export default store
