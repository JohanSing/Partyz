import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import PrivateRoute from '../utils/PrivateRoute'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect to='/home' />
      </Switch>
    </Router>
  )
}

export default Routes
