import React from 'react'
import {Form} from 'react-bootstrap'

class AddEventForm extends React.Component {
    constructor() {
        super();
        this.state = {
            event: {
                name: undefined,
                location: undefined,
                date: undefined,
                time: undefined,
                description: undefined
            },
            disabled: false
        }
    }

    // create function to handle the change and create event info in state


    // create function to handle the submit and add the event to the database

    render() {
        return (
            <Form className="mt-5">
                <div className="form-group">
                    <label for="name">Event Name</label>
                    <input type="text" className="form-control" name="name"></input>
                </div>
                <div className="form-group">
                    <label for="location">Event Location</label>
                    <input type="text" className="form-control" name="location"></input>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label for="date">Event Date</label>
                        <input type="date" name="date" className="form-control"></input>
                    </div>
                    <div className="col">
                        <label for="time">Event Time</label>
                        <input type="time" name="time" className="form-control"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="description">Event Description</label>
                    <textarea class="form-control" name="description" rows="3"/>
                </div>
                <button type="submit" className="btn btn-dark" disabled={this.state.disabled}>Add Event</button>
            </Form>
        )
    }
}

export default AddEventForm