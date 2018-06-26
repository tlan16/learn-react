import React from 'react'
import ReactDOM from 'react-dom'
import { REACT_ROOT_ELEMENT_ID } from './index'

const app = () => {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById(REACT_ROOT_ELEMENT_ID),
  )
}

export default app
