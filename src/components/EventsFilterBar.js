import { Form, Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddIcon from '../assets/plus-circle-solid.svg'

let EventsFilterBar = () => {
    return (
        <section className="filter-bar my-5 rounded d-flex justify-content-between align-items-center">
            <div>
                <h3><span className="text-purple">5</span> Events</h3>
            </div>
            <div className="d-flex align-items-center">
                <Form className="mr-3">
                    <select id="filter">
                        <option defaultValue="recently-added">Recently Added</option>
                        <option value="by-date">Filter by Date</option>
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