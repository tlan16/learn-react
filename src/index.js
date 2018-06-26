import App from './app'

const reactRoot = document.createElement('div')
reactRoot.id = 'react-root'

document.body.appendChild(reactRoot)

App(reactRoot)
