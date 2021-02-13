import React from 'react'
import {Form} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import star from '../../assets/star-regular.svg'
import favstar from '../../assets/star-solid.svg'
import '../../App.css'
import {Link} from 'react-router-dom'

class EventTable extends React.Component {

    // delete event
    deleteEvent = (id) => {
        this.props.client.deleteEvent(id)
            .then(() => this.props.fetchEvents())
    }

    // add event as favourite
    favouriteEvent = (id) => {
        let [event] = this.props.events.filter((event) => event._id === id)
        event.favourite = !event.favourite
        this.props.client.updateEvent(id, event)
            .then(() => this.props.fetchEvents())
    }

    // take all events in database as props and map over the array to produce html for each element
    buildEventRows = () => {
        return this.props.events.map(event => {
            return <tr id={event._id}>
                <td>
                    <img className="fav-star" src={event.favourite ? favstar : star} onClick={(e) => this.favouriteEvent(event._id)}/>
                    {event.name}
                </td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
                <td>
                    <Link to={`/user/update/${event._id}`}>
                        <Button variant="btn btn-dark">Update</Button>
                    </Link>
                    <Button variant="outline-dark" onClick={() => this.deleteEvent(event._id)}>delete</Button>
                </td>
                <td>
                    {event.user}
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <Table responsive="lg" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Action</th>
                            <th>Added by</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.buildEventRows()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default EventTable