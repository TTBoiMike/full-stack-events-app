import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'toastr/build/toastr.min.css';
import toastr from 'toastr'

let EventForm = ({ user, apiClient }) => {
    const [event, setEvent] = useState({})
    let createEvent = (e) => {
        setEvent({
            name: e.currentTarget.name.value,
            date: e.currentTarget.date.value,
            time: e.currentTarget.time.value,
            location: e.currentTarget.location.value,
            description: e.currentTarget.description.value,
            favourite: false,
            user: user.username
        })
    }

    let submitEvent = (e) => {
        e.preventDefault()
        apiClient.createEvent(event)
            .then(response => {
                console.log(response)
                toastr.success(response.data.message)
                e.target.name.value = "";
                e.target.date.value = "";
                e.target.time.value = "";
                e.target.location.value = "";
                e.target.description.value = "";
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <div className="mb-5">
            <h3 className="my-5">Add Event</h3>
            <Form onChange={(e) => createEvent(e)} onSubmit={(e) => submitEvent(e)}>
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input type="text" style={{ width: "100%" }} className="input-styled" name="name" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Event Location</label>
                    <input type="text" style={{ width: "100%" }} className="input-styled" name="location" required></input>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label htmlFor="date">Event Date</label>
                        <input type="date" name="date" style={{ width: "100%" }} className="input-styled" required></input>
                    </div>
                    <div className="col">
                        <label htmlFor="time">Event Time</label>
                        <input type="time" name="time" style={{ width: "100%" }} className="input-styled" required></input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Event Description</label>
                    <textarea style={{ width: "100%" }} className="input-styled" name="description" rows="3" />
                </div>
                <button type="submit" className="btn button mr-3">Add Event</button>
                <Link to="/events">
                    <Button variant="outline-light">Cancel</Button>
                </Link>
            </Form>
        </div>
    )
}
export default EventForm