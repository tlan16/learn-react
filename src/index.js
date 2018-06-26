import App from './app'

export const REACT_ROOT_ELEMENT_ID = 'react-root'

const reactRoot = document.createElement('div')
reactRoot.id = REACT_ROOT_ELEMENT_ID

document.body.appendChild(reactRoot)

App()
