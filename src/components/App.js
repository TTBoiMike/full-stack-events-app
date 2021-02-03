import React from 'react';
import Login from './login'
import ApiClient from '../apiClient'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
    this.apiClient = new ApiClient()
  }

  render() {
    return (
      <div className="App">
        <Login client={this.apiClient}/>
      </div>
    )
  }
}

export default App;
