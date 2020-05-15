class User {
  constructor(id, email, role, authentication = null) {
    this.id = id
    this.email = email
    this.role = role
    this.authentication = authentication
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return this.role
  }

  getAuthentication() {
    return this.authentication
  }
}

export default User
