import React from 'react';
import Login from './login'
import UserAccount from './userAccount'
import ApiClient from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: window.localStorage.getItem("token")
    }
    this.apiClient = new ApiClient(
      () => this.state.token,
      () => this.logout()
    )
  }

  login = (token) => {
    window.localStorage.setItem("token", token)
    this.setState({
      token
    })
  }

  logout = () => {
    window.localStorage.removeItem("token")
    this.setState({
      token: undefined
    })
  }

  render() {
      if(this.state.token) {
        return <UserAccount logout={this.logout}/>
      } else {
        return <Login login={this.login} client={this.apiClient}/>
      }
  }
}

export default App;
