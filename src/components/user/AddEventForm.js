import React from 'react'
import {Form} from 'react-bootstrap'
import {Table} from 'react-bootstrap'

class AddEventForm extends React.Component {
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
        }
    }

    formReset(e) {
        e.target.name.value = ""
        e.target.location.value = ""
        e.target.date.value = ""
        e.target.time.value = ""
        e.target.description.value = ""
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
        this.props.client.createEvent(this.state.event)
            .then(() => {
                this.props.fetchEvents()
                this.formReset(e)  
            })
    }

    render() {
        return (
                <Form className="mt-5" onChange={(e) => this.handleFormChange(e)} onSubmit={(e) => this.submitNewEvent(e)}>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Add a New Event</th>
                            </tr>
                            <tr>
                                <td>
                                    Event Name
                                </td>
                                <td>
                                    Event Location
                                </td>
                                <td>
                                    Event Date/Time
                                </td>
                                <td>
                                    Event Description
                                </td>
                                <td>
                                    Action
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                <input type="text" className="form-control" name="name"></input>
                            </td>
                            <td>
                                <input type="text" className="form-control" name="location"></input>
                            </td>
                            <td>
                                <input type="date" name="date" className="form-control mb-2"></input>
                                <input type="time" name="time" className="form-control"></input>
                            </td>
                            <td>
                                <textarea className="form-control" name="description" rows="3"/>
                            </td>
                            <td>
                                <button type="submit" className="btn btn-dark w-100" disabled={this.state.disabled}>Add Event</button>
                            </td>
                        </tbody>
                    </Table>
                </Form>
        )
    }
}

export default AddEventForm