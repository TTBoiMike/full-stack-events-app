import React from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { Form, Button, Table, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Profile extends React.Component {

    calcUserEvents() {
        let myEvents = this.props.events.filter(event => event.user === this.props.userInfo.userName)
        return myEvents.length
    }

    submitProfileUpdate(e, id) {
        e.preventDefault()
        let username = e.currentTarget.username.value
        this.props.client.updateUser(id, { username: username })
            .then((response) => {
                if (response.status === 200) {
                    toastr.success(response.data)
                    this.props.updateUserName(username)
                } else {
                    toastr.warning(response.data)
                }
            })
            .finally(() => document.getElementById("account-form").reset())
    }

    render() {
        return (
            <div>
                <h2 className="my-5">
                    Profile
                </h2>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Account Details">
                        <Table className="mt-3" variant="dark" bordered striped>
                            <thead>
                                <tr>
                                    <td>
                                        Username
                                    </td>
                                    <td>
                                        Events in schedule
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {this.props.userInfo.userName}
                                    </td>
                                    <td>
                                        {this.calcUserEvents()}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Link to="/full-stack-events-app">
                            <Button variant="btn button" onClick={() => this.props.logout()}>
                                Logout
                            </Button>
                        </Link>
                    </Tab>
                    <Tab eventKey="profile" title="Edit Account">
                        <Form className="mt-3" id="account-form" onSubmit={(e) => this.submitProfileUpdate(e, this.props.userInfo.userId)}>
                            <div className="form-group">
                                <label htmlFor="username" className="text-light"> Change Username</label>
                                <input style={{width: "100%"}} className="input-styled" type="text" id="username" name="username" placeholder="new username" autoComplete="off" />
                            </div>
                            {/* <div className="form-group row">
                            <div className="col">
                                <label htmlFor="password">Current password</label>
                                <input className="form-control" type="password" name="password" id="password" />
                            </div>
                            <div className="col">
                                <label htmlFor="password">New password</label>
                                <input className="form-control" type="password" name="password" id="password" />
                            </div>
                        </div> */}
                            <Button type="submit" variant="btn button">Submit</Button>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}