import React from 'react'
import {Avatar} from './Avatar'
import {UserInfo} from './UserInfo'

const formatDate = date => date.toLocaleString()

const Comment = props => (
  <span className="Comment" style={{display:'flex'}}>
    <span style={{flexGrow: 2}}>
      <UserInfo user={props.author}/>
      <span className="Comment-text">
        {props.text}
      </span>
    </span>
    <br/>
    <span className="Comment-date" style={{alignSelf:'flex-end'}}>
      {formatDate(props.date)}
    </span>
  </span>
)

export default Comment

export {
  Comment,
  formatDate
}
