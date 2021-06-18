import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Styles */
import './main.css'
/* Components */
import Start from './start/Start'
import Loader from './loader/Loader'
import Signin from './signin-signup/signin/Signin';
import Signup from './signin-signup/signup/Signup'
const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/'>
          <Start />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
