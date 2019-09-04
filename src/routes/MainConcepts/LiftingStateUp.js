import React from 'react'
import loadable from '@loadable/component'
import {Loading} from '../../components/Loading'

const Calculator = loadable(
  () => import('../../components/Calculator'),
  {
    fallback: <Loading/>,
  }
)

const LiftingStateUp = class extends React.Component {
  render() {
    return <Calculator/>
  }
}

export {
  LiftingStateUp,
}
