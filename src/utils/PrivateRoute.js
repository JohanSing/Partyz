import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('access-token') ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to='/'></Redirect>
        )
      }
    ></Route>
  )
}

export default PrivateRoute
