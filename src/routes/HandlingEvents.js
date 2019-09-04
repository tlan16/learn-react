import React from 'react'
import loadable from '@loadable/component'
import {Loading} from '../components/Loading'

const Toggle = loadable(
  () => import('../components/Toggle'),
  {
    fallback: <Loading/>,
  }
)

const HandlingEvents = () => <Toggle/>

export {
  HandlingEvents,
}
