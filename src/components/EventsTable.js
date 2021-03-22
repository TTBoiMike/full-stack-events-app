import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import star from '../assets/star-regular.svg'
import favstar from '../assets/star-solid.svg'

let EventsTable = ({ events, favouriteEvent }) => {
    
    console.log(events)

    let buildTable = () => {
        return events.map(event => {
            return (
                <tr key={event._id} id={event._id}>
                    <td>
                        <img className="fav-star" alt="" src={event.favourite ? favstar : star} onClick={() => favouriteEvent(event._id)}/>
                        {event.name}
                    </td>
                    <td className="d-flex flex-column">
                        {event.date}
                        <span>
                            Starts at {event.time}
                        </span>
                    </td>
                    <td>{event.location}</td>
                    <td>
                        {event.user}
                    </td>
                    <td>
                        <Link to={`/events/update/${event._id}`}>
                            <Button className="w-100" variant="btn button">Manage Event</Button>
                        </Link>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <Table responsive="lg" variant="dark" striped bordered hover>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Details</th>
                        <th>Location</th>
                        <th>Added by</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {buildTable()}
                </tbody>
            </Table>
        </>
    )
}

export default EventsTable