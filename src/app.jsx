import React from 'react'
import ReactDOM from 'react-dom'
import {Wellcome, getGreeting, formatName} from './components/Wellcome'
import {Comment} from './components/Comment'
import {Clock} from './components/Clock'

const { REACT_ROOT_DIV_ID } = process.env

const user = {
  firstName: 'Frank',
  lastName: 'Lan',
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
        <hr/>
        <p>
          <Wellcome user={user}/>
          <br/>
          <Wellcome user={undefined}/>
          <br/>
          <Wellcome user={{...user, firstName: 'Frank 2nd'}}/>
        </p>
        <hr/>
        <p>
          <Comment
            author={{name: formatName(user), avatarUrl: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.55Rvh-dU-JcIkNI2qapp7AHaHa%26pid%3DApi&f=1'}}
            date={new Date('2018-12-25T00:00:00Z')}
            text="Hello world"
          />
        </p>
        <hr/>
        <p>
          <Clock/>
        </p>
      </span>
    ),
    document.getElementById(REACT_ROOT_DIV_ID),
  )
}

export {
  app,
}
