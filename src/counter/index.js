import store from './store'
import { INCREMENT } from './constants'

const render = () => {
  document.body.innerText = store.getState()
}

export const counter = () => {
  store.subscribe(render)
  render()

  document.addEventListener('click', () => {
    store.dispatch({ type: INCREMENT })
  })
}

export default counter
