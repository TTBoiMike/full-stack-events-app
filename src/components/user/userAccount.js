import React from 'react'
import UserNavBar from './userNavBar'
import EventForm from './eventForm'
import EventFilterBar from './eventFilterBar'
import EventTable from './eventTable'
import Profile from './profile'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

class UserAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allEvents: [],
            filteredEvents: []
        }
    }

    filterEvents = (e, filter) => {
        e.preventDefault()
        if (filter === "by-date") {
            let eventsByDate = this.state.allEvents.sort((a, b) => new Date(a.date) - new Date(b.date))
            this.setState({filteredEvents: eventsByDate})
        } else if(filter === "favourites") {
            let favourites = this.state.allEvents.filter(event => event.favourite === true)
            this.setState({filteredEvents: favourites})
        } else {
            this.fetchEvents()
        }
    }

    fetchEvents = async () => {
        let response = await this.props.client.getEvents()
        this.setState( { allEvents: response.data, filteredEvents: response.data } )
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
                        <Route exact path="/">
                            <h1 className="mb-5">My EVENTS</h1>
                            <EventFilterBar filterFunction={this.filterEvents}/>
                            <EventTable client={this.props.client} events={this.state.filteredEvents} fetchEvents={this.fetchEvents} updateEvent={this.updateEvent}/>
                        </Route>
                        <Route exact path="/add">
                            <EventForm client={this.props.client}  fetchEvents={this.fetchEvents} updating={this.state.updating}/>
                        </Route>
                        <Route exact path="/update/:id" render={(props) => <EventForm {...props} client={this.props.client} fetchEvents={this.fetchEvents} /> } />
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                    </Switch>
                </Container>
                </Router>
            </div>
        )
    }
}

export default UserAccount