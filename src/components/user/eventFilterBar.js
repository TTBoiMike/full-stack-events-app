import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddIcon from '../../assets/plus-circle-solid.svg'

class EventFilterBar extends React.Component {

    handleFilterInputs(e) {
        let filter = e.currentTarget.filter.value
        this.props.filterFunction(e, filter)
    }

    render() {
        return (
            <div className="filter-bar my-5 rounded d-flex justify-content-between align-items-center">
                <div>
                    <h3><span className="text-purple">{this.props.allEvents.length}</span> {this.props.allEvents.length === 1 ? "Event" : "Events"}</h3>
                </div>
                <div className="d-flex align-items-center">
                    <Form className="mr-3" onChange={(e) => this.handleFilterInputs(e)}>
                        <select id="filter">
                            <option value="recently-added" selected>Recently Added</option>
                            <option value="by-date">Filter by Date</option>
                            <option value="favourites">Show Favourites</option>
                        </select>
                    </Form>
                    <Link to="/full-stack-events-app/user/add">
                        <Button variant="btn button" className="d-flex align-items-center"><img height="20px" className="mr-1" src={AddIcon} alt="" />Add Event</Button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default EventFilterBar