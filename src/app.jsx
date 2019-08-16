// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'

const { REACT_ROOT_DIV_ID } = process.env

const user = {
  firstName: 'Frank',
  lastName: 'Lan',
}

const formatName = ({firstName, lastName}) => `${firstName} ${lastName}`

const getGreeting = userObject => {
  const strangerTextColor = 'blue'

  if (userObject) {
    return <span style={{color: 'green'}}>Hello, {formatName(user)}</span>
  } else {
    return <span style={{color:strangerTextColor}}>Hello, Stranger</span>
  }
}

const maliciousInput = '<img src="javascript:alert(\'XSS!\')" />'

const app = () => {
  ReactDOM.render(
    (
      <span>
        <p>Hello, world!</p>
        <p>
          <span>{getGreeting(user)}</span>
          <br/>
          <span>{getGreeting(undefined)}</span>
        </p>
        <p>
          {maliciousInput}
          <br/>
          The malicious text above is shown as plain text instead of been executed.
        </p>
      </span>
    ),
    document.getElementById(REACT_ROOT_DIV_ID),
  )
}

export {
  app,
}
