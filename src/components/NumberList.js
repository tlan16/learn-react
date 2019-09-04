import React from 'react'
import { ListItem } from './ListItem'


const generateList = arrayOfInt => {
  const list = []

  arrayOfInt.forEach(
    (value, index) => {
      list.push(
        <ListItem
          key={index}
          value={value}
        />
      )
    }
  )

  return list
}

const NumberList = props => (
  <span style={{display: 'flex'}}>
    {
      generateList(
        props.numbers
          .map(anInt => anInt * 2)
      )
    }
  </span>
)

export {
  NumberList,
}

export default NumberList
