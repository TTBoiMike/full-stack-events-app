import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import star from '../assets/star-regular.svg'
import favstar from '../assets/star-solid.svg'

let EventsTable = ({ allEvents }) => {


    let buildTable = () => {
        return allEvents.map(event => {
            return (
                <tr ket={event._id} id={event._id}>
                    <td>
                        <img className="fav-star" alt="" src={event.favourite ? favstar : star} />
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
                        <Link to={`/full-stack-events-app/user/update/${event._id}`}>
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