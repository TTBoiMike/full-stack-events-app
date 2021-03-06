import React, { useState, useEffect } from "react";
import { User } from "./assets/User.context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "toastr/build/toastr.min.css";
import ApiClient from "./apiClient";
import {
  AccountPage,
  AddEvent,
  UpdateEvent,
  EventsPage,
  LoginPage,
} from "./pages";
import ProtectedRoute from "./components/protectedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let App = () => {
  const [loggedIn, loggedInHandler] = useState(false);
  const [user, setUser] = useState({});
  const [allEvents, setAllEvents] = useState([]);

  let apiClient = new ApiClient(
    () => window.localStorage.getItem("EventsAppUserToken"),
    () => this.logout()
  );

  let fetchEvents = async () => {
    let events = await apiClient.getEvents();
    setAllEvents(events.data);
  };

  useEffect(() => {
    fetchEvents();
    if (localStorage.getItem("EventsAppUserToken")) {
      let user = localStorage.getItem("EventsAppUser");
      setUser(JSON.parse(user));
      loggedInHandler(true);
    } else {
      loggedInHandler(false);
    }
  }, []);

  let loginFunction = (user, token) => {
    setUser(user);
    window.localStorage.setItem("EventsAppUser", JSON.stringify(user));
    window.localStorage.setItem("EventsAppUserToken", token);
    loggedInHandler(true);
  };

  let logoutFunction = () => {
    window.localStorage.removeItem("EventsAppUser");
    window.localStorage.removeItem("EventsAppUserToken");
    loggedInHandler(false);
    setUser({});
  };

  return (
    <div id="App">
      <Router>
        <Switch>
          <User.Provider value={user}>
            <Route
              exact
              path="/"
              render={() => (
                <LoginPage
                  apiClient={apiClient}
                  loggedIn={loggedIn}
                  logInFunc={loginFunction}
                />
              )}
            />
            <ProtectedRoute exact path="/events" loggedIn={loggedIn}>
              <EventsPage
                loggedIn={loggedIn}
                apiClient={apiClient}
              />
            </ProtectedRoute>
            <ProtectedRoute exact path="/events/add" loggedIn={loggedIn}>
              <AddEvent loggedIn={loggedIn} apiClient={apiClient} />
            </ProtectedRoute>
            <ProtectedRoute exact path="/events/update/:id" loggedIn={loggedIn}>
              <UpdateEvent
                loggedIn={loggedIn}
                events={allEvents}
                apiClient={apiClient}
              />
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
              <AccountPage
                loggedIn={loggedIn}
                logout={logoutFunction}
                events={allEvents}
                apiClient={apiClient}
              />
            </ProtectedRoute>
          </User.Provider>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
