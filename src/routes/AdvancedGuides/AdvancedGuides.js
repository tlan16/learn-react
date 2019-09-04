import React from 'react'
import {Link} from 'react-router-dom'

const AdvancedGuides = class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Advanced Guides</h3>
        <Link to="/accessibility/">Accessibility</Link>
      </React.Fragment>
    )
  }
}

export {
  AdvancedGuides,
}
