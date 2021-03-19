import React, { useState, useEffect, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'toastr/build/toastr.min.css';
import ApiClient from './apiClient'
import { AccountPage, AddEvent, UpdateEvent, EventsPage, LoginPage } from './pages'
import ProtectedRoute from './components/protectedRoute'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


let App = () => {
  const [loggedIn, loggedInHandler] = useState(false)
  const [user, setUser] = useState({})

  let apiClient = new ApiClient(
    () => window.localStorage.getItem("EventsAppUserToken"),
    () => this.logout()
  )

  useEffect(() => {
    if (localStorage.getItem("EventsAppUserToken")) {
      let user = localStorage.getItem("EventsAppUser")
      setUser(JSON.parse(user))
      loggedInHandler(true)
    } else {
      loggedInHandler(false)
    }
  }, []);

  let loginFunction = (user, token) => {
    setUser(user)
    window.localStorage.setItem("EventsAppUser", JSON.stringify(user))
    window.localStorage.setItem("EventsAppUserToken", token)
    loggedInHandler(true)
  }

  let logoutFunction = () => {
    window.localStorage.removeItem("EventsAppUser")
    window.localStorage.removeItem("EventsAppUserToken")
    loggedInHandler(false)
    setUser({})
  }

  return (
    <div id="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <LoginPage apiClient={apiClient} loggedIn={loggedIn} logInFunc={loginFunction} />} />
          <ProtectedRoute exact path="/events"
            component={EventsPage} loggedIn={loggedIn} props={{ apiClient: apiClient, user: user }} />
          <ProtectedRoute exact path="/events/add"
            component={AddEvent} loggedIn={loggedIn} props={{ apiClient: apiClient, user: user }} />
          <ProtectedRoute exact path="/events/update/:id"
            component={UpdateEvent} loggedIn={loggedIn} />
          <ProtectedRoute exact path="/profile"
            component={AccountPage} loggedIn={loggedIn} props={{ logout: logoutFunction }} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
