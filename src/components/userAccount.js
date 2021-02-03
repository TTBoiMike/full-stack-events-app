import React from 'react'

class UserAccount extends React.Component {

    render() {
        return (
            <div>
                <h1>User Account!</h1>
                <button onClick={() => this.props.logout()}>
                    Logout
                </button>
            </div>
        )
    }
}

export default UserAccount