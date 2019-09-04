import React from 'react'
import {getGreeting} from '../components/Wellcome'

const IntroducingJsx = class extends React.Component {
  #user = {
    firstName: 'Frank',
    lastName: 'Lan',
  }

  #maliciousInput = '<img src="javascript:alert(\'XSS!\')" />'

  render() {

    return (
      <React.Fragment>
        <span>{getGreeting(this.#user)}</span>
        <br/>
        <span>{getGreeting(undefined)}</span>
        <br/>
        <p>
          <code>{this.#maliciousInput}</code>
          <br/>
          The malicious text above is shown as plain text instead of been
          executed.
        </p>
      </React.Fragment>
    )
  }
}

export {
  IntroducingJsx,
}
