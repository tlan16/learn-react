import React from 'react'
import {NameForm} from '../components/NameForm'
import {EssayForm} from '../components/EssayForm'
import {FlavorForm} from '../components/FlavorForm'
import {FlavorsForm} from '../components/FlavorsForm'
import {FileForm} from '../components/FileForm'
import {Reservation} from '../components/Reservation'

const Forms = () => (
  <React.Fragment>
    <NameForm/>
    <br/>
    <EssayForm/>
    <br/>
    <FlavorForm/>
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
