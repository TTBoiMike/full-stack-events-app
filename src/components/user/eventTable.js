import React from 'react'
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import star from '../../assets/star-regular.svg'
import favstar from '../../assets/star-solid.svg'
import '../../App.css'
import {Link} from 'react-router-dom'

class EventTable extends React.Component {

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
                    <img className="fav-star" alt="" src={event.favourite ? favstar : star} onClick={(e) => this.favouriteEvent(event._id)}/>
                    {event.name}
                </td>
                <td className="d-flex flex-column">
                    {event.date}
                    <span>
                    Starts at {event.time}
                    </span>
                </td>
                <td>{event.location}</td>
                <td>{event.description}</td>
                <td>
                    {event.user}
                </td>
                <td>
                    <Link to={`/full-stack-events-app/user/update/${event._id}`}>
                        <Button className="w-100" variant="btn button">Manage Event</Button>
                    </Link>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <Table responsive="lg" variant="dark" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Added by</th>
                            <th></th>
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