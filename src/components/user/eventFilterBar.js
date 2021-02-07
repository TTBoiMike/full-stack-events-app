import React from 'react'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class EventFilterBar extends React.Component {

    buildLocationFilter() {
        let locations = [];
        this.props.events.forEach(event => {
            let eventLocation = event.location.charAt(0).toUpperCase()+event.location.slice(1)
            locations.push(eventLocation)
        })
        let filtLocations = [...new Set(locations)]
        return filtLocations.map(location => {
            return <option value={location}>{location}</option>
        })
    }

    render() {
        return (
            <div className="filter-bar mb-5 p-3 d-flex justify-content-between rounded">
                <Form className="d-flex bordered">
                <select class="custom-select">
                    <option value="recently-added" selected>Recently Added</option>
                    <option value="by-date">Filter by Date</option>
                    <option value="favourites">Favourites</option>
                </select>
                <select class="custom-select">
                    {this.buildLocationFilter()}
                </select>
                </Form>
                <Link>
                    <Button className="btn btn-dark">Add Event</Button>
                </Link>
            </div>
        )
    }
}
export default EventFilterBar
