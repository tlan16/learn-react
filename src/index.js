import App from './app'

export const REACT_ROOT_DIV_ID = 'react-root'

function reactRoot() {
  const element = document.createElement('div')
  element.id = REACT_ROOT_DIV_ID
  return element
}

document.body.appendChild(reactRoot())

App(REACT_ROOT_DIV_ID)
