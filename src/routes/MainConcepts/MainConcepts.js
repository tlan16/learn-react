import React from 'react'
import {Link} from 'react-router-dom'

const MainConcepts = class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Main Concepts</h3>
        <Link to="/hello_world/">1. Hello World</Link>
        <br/>
        <Link to="/introducing_jsx/">2. Introducing JSX</Link>
        <br/>
        <Link to="/rendering_elements/">3. Rendering Elements</Link>
        <br/>
        <Link to="/components_and_props/">4. Components and Props</Link>
        <br/>
        <Link to="/state_and_lifecycle/">5. State and Lifecycle</Link>
        <br/>
        <Link to="/handling_events/">6. Handling Events</Link>
        <br/>
        <Link to="/conditional_rendering/">7. Conditional Rendering</Link>
        <br/>
        <Link to="/list_and_keys/">8. Lists and Keys</Link>
        <br/>
        <Link to="/forms/">9. Forms</Link>
        <br/>
        <Link to="/lifting_state_up/">10. Lifting State Up</Link>
      </React.Fragment>
    )
  }
}

export {
  MainConcepts,
}
