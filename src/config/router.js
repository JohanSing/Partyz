import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import PrivateRoute from '../utils/PrivateRoute'
import WelcomeScreen from '../screens/WelcomeScreen'
import HomeScreen from '../screens/HomeScreen'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <PrivateRoute path='/home' component={HomeScreen} />
        <Redirect to='/home' />
      </Switch>
    </Router>
  )
}

export default Routes
