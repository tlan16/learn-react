import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import {authService} from '../services/auth'
import {AuthContext} from '../contexts/AuthContext'

const AuthButton = withRouter(
  ({history}) =>
    authService.isAuthenticated ? (
      <AuthContext.Consumer>
        {
          ({authInfo}) => {
            return (
              <p>
                Welcome {authInfo.user.firstName}!
                <button
                  onClick={() => {
                    authService.signOut(() => history.push('/'))
                  }}
                >
                  Sign out
                </button>
              </p>
            )
          }
        }
      </AuthContext.Consumer>
    ) : (
      <p>You are not logged in.</p>
    )
)

export {
  AuthButton,
}
