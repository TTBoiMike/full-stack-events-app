import React from 'react';
// import Login from './components/login'
// import UserAccount from './components/user/userAccount'
import {Home, Add, Entry, Update, UserProfile} from './pages'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        token: window.localStorage.getItem("token"),
        userId: window.localStorage.getItem("UserId"),
      }
    this.apiClient = new ApiClient(
        () => this.state.token,
        () => this.logout()
    )
  }

  login = (userId, token) => {
    window.localStorage.setItem("token", token)
    window.localStorage.setItem("UserId", userId)
    this.setState({
      token: token,
      userId: userId,
    })
  }

logout = () => {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("UserId")
    this.setState({
      token: undefined,
      userId: undefined,
    })
}

  render() {   
    return (
      <div>
        <Router>
          <switch>
            <Route exact path="/" component={Entry} />
            <Route exact path="/user" component={Home} />
            <Route exact path="/user/profile" component={UserProfile} />
            <Route exact path="/user/add" component={Add} />
            <Route exact path="/user/update/:id" component={Update} />
          </switch>
        </Router> 
      </div>
    )




      // if(this.state.isLoggedIn) {
      //   return <UserAccount userId={this.state.userId} client={this.apiClient} logout={this.logout}/>
      // } else {
      //   return <Login login={this.login} client={this.apiClient}/>
      // }
  }
}

export default App;