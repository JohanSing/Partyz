import jwt from 'jsonwebtoken'

import User from '../models/User'

const SECURITY_ACCESS = 'security_access'

const checkAuthentication = () => {
  let accessToken = localStorage.getItem(SECURITY_ACCESS)

  if (!accessToken) {
    return false
  }

  accessToken = JSON.parse(accessToken)

  try {
    jwt.verify(accessToken.authentication, process.env.REACT_APP_SECURITY)
  } catch (err) {
    console.log(err)
    return false
  }

  return true
}

const getCurrentUser = () => {
  let accessToken = localStorage.getItem(SECURITY_ACCESS)
  accessToken = JSON.parse(accessToken)

  return new User(accessToken.id, accessToken.email, accessToken.role)
}

export { checkAuthentication, getCurrentUser, SECURITY_ACCESS }
