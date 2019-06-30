// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'

const { REACT_ROOT_DIV_ID } = process.env

const app = () => {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById(REACT_ROOT_DIV_ID),
  )
}

export {
  app,
}
