import React from 'react'
import {Form} from 'react-bootstrap'

class AddEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                name: "",
                location: "",
                date: "",
                time: "",
                description: ""
            },
            disabled: false
        }
    }

    handleFormChange(e) {
        e.preventDefault()
        let newEvent = this.state.event
        newEvent[e.target.name] = e.target.value
        this.setState({
            event: newEvent
        })
    }

    // create function to handle the submit and add the event to the database
    submitNewEvent(e) {
        e.preventDefault()
        this.props.client.createEvent(this.state.event)
            .then(response => console.log(response))

    }

    render() {
        return (
            <Form className="mt-5" onChange={(e) => this.handleFormChange(e)} onSubmit={(e) => this.submitNewEvent(e)}>
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input type="text" className="form-control" name="name"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Event Location</label>
                    <input type="text" className="form-control" name="location"></input>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label htmlFor="date">Event Date</label>
                        <input type="date" name="date" className="form-control"></input>
                    </div>
                    <div className="col">
                        <label htmlFor="time">Event Time</label>
                        <input type="time" name="time" className="form-control"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Event Description</label>
                    <textarea className="form-control" name="description" rows="3"/>
                </div>
                <button type="submit" className="btn btn-dark" disabled={this.state.disabled}>Add Event</button>
            </Form>
        )
    }
}

export default AddEventForm