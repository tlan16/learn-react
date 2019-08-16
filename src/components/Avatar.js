import React from 'react'

const Avatar = props => (
  <img
    style={{
      maxHeight: '30px',
      maxWidth: '30px',
    }}
    className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
)

export default Avatar
export {
  Avatar,
}
