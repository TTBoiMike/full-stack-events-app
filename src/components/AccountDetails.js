import React, { useState } from 'react';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { Form, Button, Table, Tab, Tabs } from 'react-bootstrap';

let AccountDetails = ({logout, user, events, apiClient}) => {
    const [userName, setUserName] = useState("")

    let userEvents = (id) => {
        let userEvents = events.filter(event => event.user === user.username)
        return userEvents.length;
    }

    let updateUserName = (e) => {
        e.preventDefault()
        const newUser = {username: userName}
        apiClient.updateUser(user.id, newUser)
            .then(() => {
                toastr.success(`Username updated!`)
            })
            .catch(err => {
                toastr.warning("Unable to update username")
            })
            .finally(() => {setUserName("")})
    }

    return (
        <>
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
                                    {user.username}
                                </td>
                                <td>
                                    {userEvents(user.username)}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="btn button" onClick={logout}>
                        Logout
                    </Button>
                </Tab>
                <Tab eventKey="profile" title="Edit Account">
                    <Form className="mt-3" id="account-form" onChange={(e) => setUserName(e.currentTarget.username.value)}onSubmit={(e) => updateUserName(e)}>
                        <div className="form-group">
                            <label htmlFor="username" className="text-light"> Change Username</label>
                            <input value={userName} style={{ width: "100%" }} className="input-styled" type="text" id="username" name="username" placeholder="new username" autoComplete="off" />
                        </div>
                        <Button type="submit" variant="btn button">Submit</Button>
                    </Form>
                </Tab>
            </Tabs>
        </>
    )
}

export default AccountDetails