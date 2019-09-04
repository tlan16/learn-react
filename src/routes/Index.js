import React from 'react'
import {MainConcepts} from './MainConcepts/MainConcepts'
import {AdvancedGuides} from './AdvancedGuides/AdvancedGuides'

const Index = class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section><MainConcepts/></section>
        <section><AdvancedGuides/></section>
      </React.Fragment>
    )
  }
}

export {
  Index,
}
