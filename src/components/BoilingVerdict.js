import React from 'react'

const BoilingVerdict = props => {
  return props.celsius >= 100
    ? <span>The water would boil.</span>
    : <span>The water would not boil.</span>
}

export {
  BoilingVerdict,
}
