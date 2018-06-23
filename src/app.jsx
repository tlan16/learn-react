import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import Counter from './counter/index'
import { DECREMENT, INCREMENT } from './counter/constants'
import { REACT_ROOT_DIV_ID } from './index'

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
                store.dispatch({
                    type: INCREMENT,
                })
            }}
      onDecrement={() => {
                store.dispatch({
                    type: DECREMENT,
                })
            }}
    />,
    document.getElementById(REACT_ROOT_DIV_ID),
  )
}

const app = () => {
  store.subscribe(render)
  render()
}

export default app
