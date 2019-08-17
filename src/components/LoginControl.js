import React from 'react'
import { Greeting } from './Greeting'
import { LogoutButton } from './LogoutButton'
import { LoginButton } from './LoginButton'

const user = {
  firstName: 'Frank',
  lastName: 'Lan',
}

const LoginControl = class extends React.Component {
  #loggedInUser

  constructor(props) {
    super(props)

    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)

    this.state = {
      isLoggedIn: false,
    }
  }

  handleLoginClick() {
    this.setState(()=> {
      this.#loggedInUser = user

      return {
        isLoggedIn: true,
      }
    })
  }

  handleLogoutClick() {
    this.setState(()=> ({
      isLoggedIn: false,
    }))
  }

  getButtonElement(isLoggedIn) {
    return isLoggedIn === true
      ? <LogoutButton onClick={this.handleLogoutClick}/>
      : <LoginButton onClick={this.handleLoginClick}/>
  }

  render() {
    return <span>
      <Greeting isLoggedIn={this.state.isLoggedIn} user={this.#loggedInUser}/>
      <span>&nbsp;</span>
      {this.getButtonElement(this.state.isLoggedIn)}
    </span>
  }
}

export {
  LoginControl,
}
