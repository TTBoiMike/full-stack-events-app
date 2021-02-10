import React from 'react'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class EventFilterBar extends React.Component {

    handleFilterInputs(e) {
        let filter = e.currentTarget.filter.value
        this.props.filterFunction(e, filter)
    }

    render() {
        return (
            <div className="filter-bar mb-5 p-3 d-flex justify-content-between rounded">
                <Form className="d-flex align-items-center" onChange={(e) => this.handleFilterInputs(e)}>
                <select class="custom-select" id="filter">
                    <option value="recently-added" selected>Recently Added</option>
                    <option value="by-date">Filter by Date</option>
                    <option value="favourites">Show Favourites</option>
                </select>
                </Form>
                <Link to="/add">
                    <Button className="btn btn-dark">Add Event</Button>
                </Link>
            </div>
        )
    }
}
export default EventFilterBar