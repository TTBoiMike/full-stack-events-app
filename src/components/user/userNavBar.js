import React from 'react' 
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

export default class UserNavBar extends React.Component {

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" className="mb-5">
                    <Container>
                        <Link to="/" className="mr-3"><Navbar.Brand href="#home">E V E N T</Navbar.Brand></Link>
                        <Nav className="mr-auto">
                            <Link to="/" className="mr-3 nav-link">My Events</Link>
                        </Nav>
                        <Link to="/profile"><Button variant="btn btn-dark" className="mr-2">Profile</Button></Link>
                        <Button variant="outline-dark" onClick={() => this.props.logout()}>
                            Logout
                        </Button>
                    </Container>
                </Navbar>
            </div>
        )
    }
}