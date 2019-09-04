import React from 'react'
import {Avatar} from './Avatar'

const UserInfo = props => (
  <span className="UserInfo">
    <Avatar user={props.user}/>
    <span className="UserInfo-name">
      {props.user.name}:
    </span>
  </span>
)

export {
  UserInfo,
}
