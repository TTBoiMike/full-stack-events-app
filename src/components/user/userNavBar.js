import React from 'react' 
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class UserNavBar extends React.Component {

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">E V E N T</Navbar.Brand>
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button> */}
                        </Form>
                        <Button variant="btn btn-dark" className="mr-2">Add Event</Button>
                        <Button variant="outline-dark" onClick={() => this.props.logout()}>
                            Logout
                        </Button>
                    </Container>
                </Navbar>
            </div>
        )
    }
}