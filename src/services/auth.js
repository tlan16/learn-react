const fakeAuthData = {
  user : {
    firstName: 'Frank',
    lastName: 'Lan',
    email: 'franklan118@gmail.com',
  },
  roles: {
    admin: true,
  },
  permissions: {
    write: true,
    read: true,
  },
}

const AuthService = class {
  #isAuthenticated = false
  #authenticated

  get isAuthenticated() {
    return this.#isAuthenticated
  }

  get authenticated() {
    return this.#authenticated
  }

  authenticate(cb) {
    this.#isAuthenticated = true
    this.#authenticated = fakeAuthData,
    setTimeout(cb, 100)
  }

  signOut(cb) {
    this.#isAuthenticated = false
    this.#authenticated = undefined
    setTimeout(cb, 100)
  }
}

const authService = new AuthService()

export {
  AuthService,
  authService,
}
