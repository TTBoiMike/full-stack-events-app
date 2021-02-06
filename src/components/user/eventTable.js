import React from 'react';
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'


class EventTable extends React.Component {

    // delete event
    deleteEvent = (id) => {
        this.props.client.deleteEvent(id)
            .then(() => this.props.fetchEvents())
    }

    // take all events in database as props and map over the array to produce html for each element
    buildEventRows = () => {
        return this.props.events.map(event => {
            return <tr id={event._id}>
                <td>{event.date}</td>
                <td>{event.name}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
                <td>
                    <Button variant="btn btn-dark">Update</Button>
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
                            <th>Date</th>
                            <th>Event</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {this.buildEventRows()}
                </Table>
            </div>
        )
    }
}

export default EventTable