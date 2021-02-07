import React from 'react'
import UserNavBar from './userNavBar'
import AddEventForm from './addEventForm'
import EventTable from './eventTable'
import {Container} from 'react-bootstrap'

class UserAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allEvents: [],
            // for filtering events
            filteredEvents: [],
        }
    }

    fetchEvents = async () => {
        let response = await this.props.client.getEvents()
        this.setState( { allEvents: response.data } )
    }

    componentDidMount() {
        this.fetchEvents()
    }

    render() {
        return (
            <div>
                <UserNavBar logout={this.props.logout}/>
                <Container>
                    <AddEventForm client={this.props.client}  fetchEvents={this.fetchEvents} updating={this.state.updating}/>
                    <EventTable client={this.props.client} events={this.state.allEvents} fetchEvents={this.fetchEvents} updateEvent={this.updateEvent}/>
                </Container>
            </div>
        )
    }
}

export default UserAccount