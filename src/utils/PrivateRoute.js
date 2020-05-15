import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { checkAuthentication } from '../utils/AuthenticationProvider'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuthentication() ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to='/'></Redirect>
        )
      }
    ></Route>
  )
}

export default PrivateRoute
