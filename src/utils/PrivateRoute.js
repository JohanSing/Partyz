import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

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

PrivateRoute.propTypes = {
  component: PropTypes.Component
}

export default PrivateRoute
