import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserIcon from '../assets/user-circle-solid.svg'

let HeaderNav = () => {
    return (
        <header className="mb-5">
            <Container>
                <nav className="py-3 d-flex">
                    <h3 className="mr-3 text-light" href="#home">E V E N T</h3>
                    <Nav className="mr-auto">
                        <Link to="/events" className="mr-3 nav-link text-light">View Events</Link>
                    </Nav>
                    <Link to="/profile">
                        <Button variant="btn" className="mr-2 button d-flex align-items-center">
                            <img height="20px" className="mr-1" src={UserIcon} alt="" />Profile
                        </Button>
                    </Link>
                </nav>
            </Container>
        </header>
    )
}
export default HeaderNav
