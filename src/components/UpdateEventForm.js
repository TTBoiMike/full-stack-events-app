import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

let UpdateEventForm = () => {

    return (
        <Form className="mb-5">
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
            <button type="submit" className="btn button mr-3">Update Event</button>
            <Link to="/events">
                <Button variant="outline-light">Cancel</Button>
            </Link>
        </Form>
    )
}
export default UpdateEventForm