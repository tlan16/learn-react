const AuthService = class {
  #isAuthenticated = false

  get isAuthenticated() {
    return this.#isAuthenticated
  }

  authenticate(cb) {
    this.#isAuthenticated = true
    setTimeout(cb, 100)
  }

  signOut(cb) {
    this.#isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const authService = new AuthService()

export {
  AuthService,
  authService,
}
