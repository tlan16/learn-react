import React from 'react'
import loadable from '@loadable/component'
import {Loading} from '../components/Loading'

const LoginControl = loadable(
  () => import('../components/LoginControl'),
  {
    fallback: <Loading/>,
  }
)

const ConditionalRendering = () => <LoginControl/>

export {
  ConditionalRendering,
}
