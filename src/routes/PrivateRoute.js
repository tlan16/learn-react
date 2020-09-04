import React, { Component } from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import {authService} from '../services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export {
  PrivateRoute,
}