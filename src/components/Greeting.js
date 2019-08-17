import React from 'react'
import { formatName } from './Wellcome'

const Greeting = class extends React.Component {
  #loggedInUserTextColor = 'green'
  #strangerTextColor = 'blue'

  render() {
    return this.props.isLoggedIn
      ? <span style={{color: this.#loggedInUserTextColor}}>Hello, {formatName(this.props.user)}</span>
      : <span style={{color: this.#strangerTextColor}}>Hello, Stranger</span>
  }
}

export {
  Greeting,
}
