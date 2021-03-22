import { Form, Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddIcon from '../assets/plus-circle-solid.svg'

let EventsFilterBar = ({filterEvents, allEvents}) => {
    return (
        <section className="filter-bar my-5 rounded d-flex justify-content-between align-items-center">
            <div>
                <h3><span className="text-purple">{ allEvents.length}</span> Events</h3>
            </div>
            <div className="d-flex align-items-center">
                <Form className="mr-3" onChange={(e) => filterEvents(e.target.value)}>
                    <select id="filter" >
                        <option value="all">All Events</option>
                        <option value="upcoming">Upcoming Events</option>
                        <option value="favourites">Show Favourites</option>
                    </select>
                </Form>
                <Link to="/events/add">
                    <Button variant="btn button" className="d-flex align-items-center"><img height="20px" className="mr-1" src={AddIcon} alt="" />Add Event</Button>
                </Link>
            </div>
        </section>
    )
}
export default EventsFilterBar