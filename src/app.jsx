import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as Routes from './routes'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Routes.Index}/>
          <Route path="/hello_world/" component={Routes.HelloWorld}/>
          <Route path="/introducing_jsx/" component={Routes.IntroducingJsx}/>
          <Route path="/rendering_elements/"
            component={Routes.RenderingElements}/>
          <Route path="/components_and_props/"
            component={Routes.ComponentsAndProps}/>
          <Route path="/state_and_lifecycle/"
            component={Routes.StateAndLifecycle}/>
          <Route path="/handling_events/" component={Routes.HandlingEvents}/>
          <Route path="/conditional_rendering/"
            component={Routes.ConditionalRendering}/>
          <Route path="/list_and_keys/" component={Routes.ListsAndKeys}/>
          <Route path="/forms/" component={Routes.Forms}/>
          <Route path="/lifting_state_up/" component={Routes.LiftingStateUp}/>
        </div>
      </Router>
    )
  }
}

export {
  AppRouter,
}
