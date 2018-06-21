import React from 'react'
import ReactDOM from 'react-dom'

const app = rootElementId =>{

  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById(rootElementId)
  )
}

export default app
