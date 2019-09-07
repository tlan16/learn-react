import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import {authService} from '../services/auth'

const AuthButton = withRouter(
  ({history}) =>
    authService.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            authService.signOut(() => history.push('/'))
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
)

export {
  AuthButton,
}
