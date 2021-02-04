import React from 'react'
import UserNavBar from './userNavBar'
import AddEventForm from './AddEventForm'
import {Container} from 'react-bootstrap'

class UserAccount extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            allEvents: [],
            // for filtering events
            filteredEvents: []
        }
    }

    render() {
        return (
            <div>
                <UserNavBar logout={this.props.logout}/>
                <Container>
                    <AddEventForm />
                </Container>
            </div>
        )
    }
}

export default UserAccount