import React from 'react'

const AuthContext = React.createContext({
  authInfo: undefined,
  authenticate: () => {},
})

export {
  AuthContext,
}
