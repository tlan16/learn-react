import React from 'react'
import loadable from '@loadable/component'
import {Loading} from '../../components/Loading'

const NameForm = loadable(
  () => import('../../components/NameForm'),
  {
    fallback: <Loading/>,
  }
)

const Accessibility = () => (
  <NameForm/>
)

export {
  Accessibility,
}
