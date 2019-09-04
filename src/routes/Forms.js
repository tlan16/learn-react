import React from 'react'
import loadable from '@loadable/component'
import {Loading} from '../components/Loading'

const NameForm = loadable(
  () => import('../components/NameForm'),
  {
    fallback: <Loading/>,
  }
)

const EssayForm = loadable(
  () => import('../components/EssayForm'),
  {
    fallback: <Loading/>,
  }
)

const FlavorsForm = loadable(
  () => import('../components/FlavorsForm'),
  {
    fallback: <Loading/>,
  }
)

const FileForm = loadable(
  () => import('../components/FileForm'),
  {
    fallback: <Loading/>,
  }
)

const Reservation = loadable(
  () => import('../components/Reservation'),
  {
    fallback: <Loading/>,
  }
)

const Forms = () => (
  <React.Fragment>
    <NameForm/>
    <br/>
    <EssayForm/>
    <br/>
    <FlavorsForm/>
    <br/>
    <FlavorsForm/>
    <br/>
    <FileForm/>
    <hr/>
    <Reservation/>
  </React.Fragment>
)

export {
  Forms,
}
