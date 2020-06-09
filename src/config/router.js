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
import CreatePartyScreen from '../screens/CreatePartyScreen'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <PrivateRoute path='/home' component={HomeScreen} />
        <PrivateRoute path='/parties/create' component={CreatePartyScreen} />
        <Redirect to='/home' />
      </Switch>
    </Router>
  )
}

export default Routes
