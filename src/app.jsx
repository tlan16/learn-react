import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Index} from './routes/Index'
import {HelloWorld} from './routes/MainConcepts/HelloWorld'
import {IntroducingJsx} from './routes/MainConcepts/IntroducingJsx'
import {RenderingElements} from './routes/MainConcepts/RenderingElements'
import {ComponentsAndProps} from './routes/MainConcepts/ComponentsAndProps'
import {StateAndLifecycle} from './routes/MainConcepts/StateAndLifecycle'
import {HandlingEvents} from './routes/MainConcepts/HandlingEvents'
import {ConditionalRendering} from './routes/MainConcepts/ConditionalRendering'
import {ListsAndKeys} from './routes/MainConcepts/ListsAndKeys'
import {Forms} from './routes/MainConcepts/Forms'
import {LiftingStateUp} from './routes/MainConcepts/LiftingStateUp'
import {Accessibility} from './routes/AdvancedGuides/Accessibility'
import {PrivateRoute} from './routes/PrivateRoute'
import {Login} from './routes/Login'

const Private = () => (
  <React.Fragment>
    Private
  </React.Fragment>
)

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <main className="App">
          <Route path="/" exact component={Index}/>
          <Route path="/hello_world/" component={HelloWorld}/>
          <Route path="/introducing_jsx/"
            component={IntroducingJsx}/>
          <Route path="/rendering_elements/"
            component={RenderingElements}/>
          <Route path="/components_and_props/"
            component={ComponentsAndProps}/>
          <Route path="/state_and_lifecycle/"
            component={StateAndLifecycle}/>
          <Route path="/handling_events/"
            component={HandlingEvents}/>
          <Route path="/conditional_rendering/"
            component={ConditionalRendering}/>
          <Route path="/list_and_keys/" component={ListsAndKeys}/>
          <Route path="/forms/" component={Forms}/>
          <Route path="/lifting_state_up/"
            component={LiftingStateUp}/>
          <Route path="/accessibility/"
            component={Accessibility}/>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected/" component={Private}/>
        </main>
      </Router>
    )
  }
}

export {
  AppRouter,
}
