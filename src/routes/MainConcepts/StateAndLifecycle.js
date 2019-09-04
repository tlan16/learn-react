import React from 'react'
import loadable from '@loadable/component'
import {Loading} from '../../components/Loading'

const Clock = loadable(
  () => import('../../components/Clock'),
  {
    fallback: <Loading/>,
  }
)

const StateAndLifecycle = () => <Clock/>

export {
  StateAndLifecycle,
}
