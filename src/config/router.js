import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import PrivateRoute from '../utils/PrivateRoute'
import WelcomeScreen from '../screens/WelcomeScreen'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <Redirect to='/home' />
      </Switch>
    </Router>
  )
}

export default Routes
