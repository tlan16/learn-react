import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'

class Login extends Component {
  state = {redirectToReferrer: false}

  login = authenticate => {
    authenticate(() => {
      this.setState({redirectToReferrer: true})
    })
  }

  render() {
    let {from} = this.props.location.state || {from: {pathname: '/'}}
    let {redirectToReferrer} = this.state

    if (redirectToReferrer) return <Redirect to={from}/>

    return (
      <AuthContext.Consumer>
        {
          ({authenticate}) => {
            return (
              <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login.bind(this, authenticate)}>Log in
                </button>
              </div>
            )
          }
        }
      </AuthContext.Consumer>
    )
  }
}

export {
  Login,
}
