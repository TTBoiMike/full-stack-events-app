import React from 'react'
import UserNavBar from './userNavBar'
import EventForm from './eventForm'
import EventFilterBar from './eventFilterBar'
import EventTable from './eventTable'
import Profile from './profile'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class UserAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                userId: "",
                userName: ""
            },
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

    fetchUser = async (id) => {
        let response = await this.props.client.getUser(id)
        this.setState( { user: {userId: id, userName: response.data.username} } )
    }

    componentDidMount() {
        this.fetchEvents()
        this.fetchUser(this.props.userId)
    }

    updateUserName = (username) => {
        this.setState({user: {userName: username}})
    }

    render() {
        return (
            <div>
                <Router>
                <UserNavBar logout={this.props.logout}/>
                <Container>
                    <Switch>
                        <Route exact path="/full-stack-events-app/">
                            <h1 className="mb-5">E V E N T S</h1>
                            <EventFilterBar filterFunction={this.filterEvents}/>
                            <EventTable client={this.props.client} events={this.state.filteredEvents} fetchEvents={this.fetchEvents} updateEvent={this.updateEvent}/>
                        </Route>
                        <Route exact path="/full-stack-events-app/user/add">
                            <EventForm userInfo={this.state.user} client={this.props.client}  fetchEvents={this.fetchEvents} updating={this.state.updating}/>
                        </Route>
                        <Route exact path="/full-stack-events-app/user/update/:id" render={(props) => <EventForm {...props} client={this.props.client} fetchEvents={this.fetchEvents} /> } />
                        <Route exact path="/full-stack-events-app/user/profile">
                            <Profile updateUserName={this.updateUserName} userInfo={this.state.user} client={this.props.client} events={this.state.allEvents}/>
                        </Route>
                    </Switch>
                </Container>
                </Router>
            </div>
        )
    }
}

export default UserAccount