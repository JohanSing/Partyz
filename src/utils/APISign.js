import axios from 'axios'

import ErrorSignException from '../exceptions/ErrorSignException'
import User from '../models/User'

const URL_SIGNUP = `${process.env.REACT_APP_API_DOMAIN}auth/local/register`
const URL_SIGNIN = `${process.env.REACT_APP_API_DOMAIN}auth/local`

const signUp = async (email, password) => {
  let response = null

  try {
    response = await axios.post(URL_SIGNUP, {
      username: '',
      email,
      password
    })
  } catch (err) {
    throw new ErrorSignException(
      err.response.data.message[0].messages[0].message
    )
  }

  return new User(
    response.data.user.id,
    response.data.user.email,
    response.data.user.role.type,
    response.data.jwt
  )
}

const signIn = async (identifier, password) => {
  let response = null

  try {
    response = await axios.post(URL_SIGNIN, {
      identifier,
      password
    })
  } catch (err) {
    throw new ErrorSignException(
      err.response.data.message[0].messages[0].message
    )
  }

  return new User(
    response.data.user.id,
    response.data.user.email,
    response.data.user.role.type,
    response.data.jwt
  )
}

export { signUp, signIn }
