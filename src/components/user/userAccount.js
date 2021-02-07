import React from 'react'
import UserNavBar from './userNavBar'
import AddEventForm from './addEventForm'
import EventTable from './eventTable'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

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
                <Router>
                <UserNavBar logout={this.props.logout}/>
                <Container>
                    <Switch>
                        <Route path="/add">
                            <AddEventForm client={this.props.client}  fetchEvents={this.fetchEvents} updating={this.state.updating}/>
                        </Route>
                        <Route path="/">
                            <EventTable client={this.props.client} events={this.state.allEvents} fetchEvents={this.fetchEvents} updateEvent={this.updateEvent}/>
                        </Route>
                    </Switch>
                </Container>
                </Router>
            </div>
        )
    }
}

export default UserAccount