import React from 'react'
import ReactDOM from 'react-dom'
import {AppRouter} from './app'

const { REACT_ROOT_DIV_ID } = process.env

function reactRoot() {
  const element = document.createElement('div')
  element.id = REACT_ROOT_DIV_ID
  return element
}

document.body.appendChild(reactRoot())

ReactDOM.render(<AppRouter />, document.getElementById(REACT_ROOT_DIV_ID))
