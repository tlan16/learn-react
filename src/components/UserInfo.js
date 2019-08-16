import React from 'react'
import { Avatar } from './Avatar'

const UserInfo = props => (
  <div className="UserInfo">
    <Avatar user={props.user}/>
    <span className="UserInfo-name">
      {props.user.name}:
    </span>
  </div>
)

export default UserInfo
export {
  UserInfo,
}
