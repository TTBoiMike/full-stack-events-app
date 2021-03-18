import React, { useState, useEffect } from 'react';
import ApiClient from './apiClient'
import { AccountPage, AddEvent, UpdateEvent, EventsPage, LoginPage } from './pages'
import ProtectedRoute from './components/protectedRoute'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


let App = () => {
  const [loggedIn, loggedInHandler] = useState(false)
  console.log("isLoggedIn", loggedIn)

  let apiClient = new ApiClient(
    () => this.state.token,
    () => this.logout()
  )

  useEffect(() => {
    if (localStorage.getItem("EventsAppUserToken")) {
      loggedInHandler(true)
    } else {
      loggedInHandler(false)
    }
  }, []);

  let loginFunction = (user, token) => {
    console.log("Logged In")
    window.localStorage.setItem("EventsAppUser", user)
    window.localStorage.setItem("EventsAppUserToken", token)
    loggedInHandler(true)
  }

  let logoutFunction = () => {
    window.localStorage.removeItem("EventsAppUser")
    window.localStorage.removeItem("EventsAppUserToken")
    loggedInHandler(false)
  }
  
  window.localStorage.removeItem("EventsAppUser")
  window.localStorage.removeItem("EventsAppUserToken")
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <LoginPage apiClient={apiClient} loggedIn={loggedIn} logInFunc={loginFunction} />} />
          <ProtectedRoute exact path="/events" component={EventsPage} loggedIn={loggedIn} />
          <ProtectedRoute exact path="/user/profile" component={AccountPage} loggedIn={loggedIn} />
          <ProtectedRoute exact path="/events/add" component={AddEvent} loggedIn={loggedIn} />
          <ProtectedRoute exact path="/events/update/:id" component={UpdateEvent} loggedIn={loggedIn} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
