import React from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Table} from 'react-bootstrap'

export default class Profile extends React.Component {

    calcUserEvents() {
        let myEvents = this.props.events.filter(event => event.user === this.props.userInfo.userName)
        return myEvents.length
    }

    submitProfileUpdate(e, id) {
        e.preventDefault()
        let username = e.currentTarget.username.value
        this.props.client.updateUser(id, {username: username})
            .then((response) => {
                if(response.status === 200) {
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
                <h3>
                    My Profile
                </h3>
                <Tabs className="mt-5" defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Account Details">
                        <Table className="mt-3" bordered striped>
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
                    </Tab>
                    <Tab eventKey="profile" title="Edit Account">
                        <Form className="mt-3" id="account-form" onSubmit={(e) => this.submitProfileUpdate(e, this.props.userInfo.userId)}>
                        <div className="form-group">
                            <label htmlFor="username"> Change Username</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder="new username" />
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
                        <Button type="submit" variant="dark">Submit</Button>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}