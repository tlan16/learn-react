import React from 'react'
import loadable from '@loadable/component'
import {Loading} from '../../components/Loading'

const NumberList = loadable(
  () => import('../../components/NumberList'),
  {
    fallback: <Loading/>,
  }
)

const ListsAndKeys = () => <NumberList numbers={[1, 2, 3, 4, 5, 1]}/>

export {
  ListsAndKeys,
}
