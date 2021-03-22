import React, { useState, useEffect } from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { Form, Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

let UpdateEventForm = ({ eventId, apiClient }) => {
    const [eventDetails, setEventDetails] = useState({
        _id: "",
        date: "",
        description: "",
        favourite: undefined,
        location: "",
        name: "",
        time: "",
        user: ""
    })
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        apiClient.getEvent(eventId)
            .then(({ data }) => {
                const event = data[0]
                setEventDetails({
                    _id: event._id,
                    date: event.date,
                    description: event.description,
                    favourite: event.favourite,
                    location: event.location,
                    name: event.name,
                    time: event.time,
                    user: event.user,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    let updateForm = (e) => {
        e.preventDefault();
        const newEvent = {
            name: e.currentTarget.name.value,
            location: e.currentTarget.location.value,
            time: e.currentTarget.time.value,
            date: e.currentTarget.date.value,
            description: e.currentTarget.description.value
        }
        setEventDetails((prevState) => ({
            ...prevState,
            ...newEvent
        }))
    }

    let submitForm = (e) => {
        e.preventDefault();
        apiClient.updateEvent(eventDetails._id, eventDetails)
            .then(() => {
                toastr.success("Event updated")
                setRedirect(true)
            })
            .catch(err => {
                console.error(err)
            })

    }

    let deleteEvent = (id) => {
        apiClient.deleteEvent(id)
            .then(() => {
                toastr.success("Event deleted")
                setRedirect(true)
            })
            .catch(err => {
                toastr.danger("Unable to delete event")
            })
    }

    if (redirect) {
        return <Redirect to="/full-stack-events-app/events" />
    } else {
        return (
            <Form className="mb-5" onChange={(e) => updateForm(e)} onSubmit={(e) => submitForm(e)}>
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input value={eventDetails.name} type="text" style={{ width: "100%" }} className="input-styled" name="name" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Event Location</label>
                    <input value={eventDetails.location} type="text" style={{ width: "100%" }} className="input-styled" name="location" required></input>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label htmlFor="date">Event Date</label>
                        <input value={eventDetails.date} type="date" name="date" style={{ width: "100%" }} className="input-styled" required></input>
                    </div>
                    <div className="col">
                        <label htmlFor="time">Event Time</label>
                        <input value={eventDetails.time} type="time" name="time" style={{ width: "100%" }} className="input-styled" required></input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Event Description</label>
                    <textarea value={eventDetails.description} style={{ width: "100%" }} className="input-styled" name="description" rows="3" />
                </div>
                <button type="submit" className="btn button mr-3">Update Event</button>
                <button onClick={() => deleteEvent(eventDetails._id)} className="btn button-delete mr-3">Delete Event</button>
                <Link to="/full-stack-events-app/events">
                    <Button className="btn" variant="outline-light" >Cancel</Button>
                </Link>
            </Form>
        )
    }
}

export default UpdateEventForm
