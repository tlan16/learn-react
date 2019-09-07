import React from 'react'
import {MainConcepts} from './MainConcepts/MainConcepts'
import {AdvancedGuides} from './AdvancedGuides/AdvancedGuides'
import {Link} from 'react-router-dom'
import {AuthButton} from './AuthButton'

const Index = class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AuthButton/>
        <section><MainConcepts/></section>
        <section><AdvancedGuides/></section>
        <section><Link to="/protected">Protected Page</Link></section>
      </React.Fragment>
    )
  }
}

export {
  Index,
}
