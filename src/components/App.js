import React from 'react';
import Login from './login'
import UserAccount from './user/userAccount'
import ApiClient from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: window.localStorage.getItem("token"),
      userId: window.localStorage.getItem("UserId")
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
      token,
      userId
    })
  }

  logout = () => {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("UserId")
    this.setState({
      token: undefined
    })
  }

  render() {
      if(this.state.token) {
        return <UserAccount userId={this.state.userId} client={this.apiClient} logout={this.logout}/>
      } else {
        return <Login login={this.login} client={this.apiClient}/>
      }
  }
}

export default App;