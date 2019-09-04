import React from 'react'
import {formatName, Wellcome} from '../../components/Wellcome'
import avatar from '../../static/avatar.jpg'
import loadable from '@loadable/component'
import {Loading} from '../../components/Loading'

const Comment = loadable(
  () => import('../../components/Comment'),
  {
    fallback: <Loading/>,
  }
)

const ComponentsAndProps = class extends React.Component {
  #user = {
    firstName: 'Frank',
    lastName: 'Lan',
  }

  #comment = {
    author: {
      name: formatName(this.#user),
      avatarUrl: avatar,
    },
    date: new Date('2018-12-25T00:00:00Z'),
    text: 'Hello world',
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
        <Comment comment={this.#comment}/>
      </React.Fragment>
    )
  }
}

export {
  ComponentsAndProps,
}
