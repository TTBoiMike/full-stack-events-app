import React from 'react'
import {Form} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import star from '../../assets/star-regular.svg'
import favstar from '../../assets/star-regular-filled.svg'
import '../../App.css'

class EventTable extends React.Component {

    // delete event
    deleteEvent = (id) => {
        this.props.client.deleteEvent(id)
            .then(() => this.props.fetchEvents())
    }

    // add event as favourite
    favouriteEvent = (id) => {
        this.props.client.getEvent(id)
            .then((response) => {
                let event = response.data[0]
                event.favourite = !event.favourite
                this.props.client.updateEvent(id, event)
                .then(() => this.props.fetchEvents())
            })
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
                    <Button variant="btn btn-dark" onClick={(e) => this.updateEvent(e, event._id)}>Update</Button>
                    <Button variant="outline-dark" onClick={() => this.deleteEvent(event._id)}>delete</Button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <h1>My EVENTS</h1>
                <Table responsive="lg" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Action</th>
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