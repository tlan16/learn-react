import React from 'react'
import {UserInfo} from './UserInfo'

const formatDate = date => date.toLocaleString()

const Comment = ({comment: {author, text, date}}) => (
  <span className="Comment" style={{display: 'flex'}}>
    <span style={{flexGrow: 2}}>
      <UserInfo user={author}/>
      <span className="Comment-text">
        {text}
      </span>
    </span>
    <br/>
    <span className="Comment-date" style={{alignSelf: 'flex-end'}}>
      {formatDate(date)}
    </span>
  </span>
)

export {
  Comment,
  formatDate
}

export default Comment
