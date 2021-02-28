import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import UserIcon from '../../assets/user-circle-solid.svg'

export default class UserNavBar extends React.Component {

    render() {
        return (
            <header>
                <Container>
                     <nav className="py-3 d-flex">
                        <h3 className="mr-3 text-light"href="#home">E V E N T</h3>
                        <Nav className="mr-auto">
                            <Link to="/full-stack-events-app/user" className="mr-3 nav-link text-light">View Events</Link>
                        </Nav>
                        <Link to="/full-stack-events-app/user/profile">
                            <Button variant="btn" className="mr-2 button d-flex align-items-center">
                                <img height="20px" className="mr-1" src={UserIcon} alt=""></img>Profile
                            </Button>
                        </Link>
                    </nav>
                </Container>
            </header>
        )
    }
}