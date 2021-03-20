import { Form, Button, Table, Tab, Tabs } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

let AccountDetails = (props) => {
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
                                    Mike
                                </td>
                                <td>
                                    3
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="btn button" onClick={props.logout}>
                        Logout
                    </Button>
                </Tab>
                <Tab eventKey="profile" title="Edit Account">
                    <Form className="mt-3" id="account-form">
                        <div className="form-group">
                            <label htmlFor="username" className="text-light"> Change Username</label>
                            <input style={{ width: "100%" }} className="input-styled" type="text" id="username" name="username" placeholder="new username" autoComplete="off" />
                        </div>
                        <Button type="submit" variant="btn button">Submit</Button>
                    </Form>
                </Tab>
            </Tabs>
        </>
    )
}

export default AccountDetails