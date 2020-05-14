import axios from 'axios'

import ErrorSignException from '../exceptions/ErrorSignException'
import CONFIG_API from '../config/config'
import User from '../models/User'

const URL_SIGNUP = `${CONFIG_API.API_URL}auth/local/register`
const URL_SIGNIN = `${CONFIG_API.API_URL}auth/local`

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
