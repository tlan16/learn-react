import React from 'react'

const formatName = ({firstName, lastName}) => `${firstName} ${lastName}`

const getGreeting = userObject => {
  const strangerTextColor = 'blue'

  if (userObject) {
    return <span style={{color: 'green'}}>Hello, {formatName(userObject)}</span>
  } else {
    return <span style={{color:strangerTextColor}}>Hello, Stranger</span>
  }
}

const Wellcome = props => getGreeting(props.user)

export {
  Wellcome,
  getGreeting,
  formatName,
}
