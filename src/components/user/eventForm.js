import React from 'react'
import {Form} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                name: "",
                location: "",
                date: "",
                time: "",
                description: "",
                favourite: false
            },
            disabled: false,
            updating: false,
            redirectToReferrer: false
        }
    }

    manageEventUpdate(id) {
        if(id) {
            this.setState({updating: true})
            this.props.client.getEvent(id)
                .then(response => {
                    let {name, location, date, time, description, favourite} = response.data[0];
                    this.setState({
                        event: {
                            name: name,
                            location: location,
                            date: date,
                            time: time,
                            description: description,
                            favourite: favourite
                        }
                    })
                })
        }
    }

    componentDidMount() {
        if(this.props.match) {
            this.manageEventUpdate(this.props.match.params.id)
        }
    }

    formReset(e) {
        this.setState({
            event: {
                name: "",
                location: "",
                date: "",
                time: "",
                description: "",
                favourite: false
            }
        })
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
        if(this.state.updating) {
            this.props.client.updateEvent(this.props.match.params.id, this.state.event)
                .then(() => this.props.fetchEvents())
        } else {
            this.props.client.createEvent(this.state.event)
                .then(() => {this.props.fetchEvents()})
        }
        this.formReset(e)
        this.setState({
            updating: false,
            redirectToReferrer: true
        })
        }

    render() {
        if(this.state.redirectToReferrer) {
            return <Redirect to="/" />
        } else {
            return (
                <Form onChange={(e) => this.handleFormChange(e)} onSubmit={(e) => this.submitNewEvent(e)}>
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.event.name} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Event Location</label>
                    <input type="text" className="form-control" name="location" value={this.state.event.location} required></input>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label htmlFor="date">Event Date</label>
                        <input type="date" name="date" className="form-control" value={this.state.event.date} required></input>
                    </div>
                    <div className="col">
                        <label htmlFor="time">Event Time</label>
                        <input type="time" name="time" className="form-control" value={this.state.event.time} required></input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Event Description</label>
                    <textarea className="form-control" name="description" rows="3" value={this.state.event.description}/>
                </div>
                <button type="submit" className="btn btn-dark mr-3" disabled={this.state.disabled}>{this.state.updating ? "Update Event" : "Add Event"}</button>
                <Button variant="outline-dark" onClick={() => this.setState({redirectToReferrer: true})}>Cancel</Button>
            </Form>
            )
        }
    }
}

export default EventForm