import React from 'react'
import {formatName, Wellcome} from '../components/Wellcome'
import {Comment} from '../components/Comment'
import avatar from '../static/avatar.jpg'

const ComponentsAndProps = class extends React.Component {
  #user = {
    firstName: 'Frank',
    lastName: 'Lan',
  }

  render() {
    return (
      <React.Fragment>
        <Wellcome user={this.#user}/>
        <br/>
        <Wellcome user={undefined}/>
        <br/>
        <Wellcome user={{...this.#user, firstName: 'Frank 2nd'}}/>
        <hr/>
        <Comment
          author={{
            name: formatName(this.#user),
            avatarUrl: avatar,
          }}
          date={new Date('2018-12-25T00:00:00Z')}
          text="Hello world"
        />
      </React.Fragment>
    )
  }
}

export {
  ComponentsAndProps,
}
