import {app} from './app'

const { REACT_ROOT_DIV_ID } = process.env

function reactRoot() {
  const element = document.createElement('div')
  element.id = REACT_ROOT_DIV_ID
  return element
}

document.body.appendChild(reactRoot())

app(REACT_ROOT_DIV_ID)
