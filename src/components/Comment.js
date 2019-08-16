import React from 'react'
import {Avatar} from './Avatar'
import {UserInfo} from './UserInfo'

const formatDate = date => date.toLocaleString()

const Comment = props => (
  <div className="Comment">
    <p>
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
    </p>
    <div className="Comment-date">
      {formatDate(props.date)}
    </div>
  </div>
)

export default Comment

export {
  Comment,
  formatDate
}
