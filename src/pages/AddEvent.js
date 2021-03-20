import { HeaderNav, EventForm } from '../components'
import { Container } from 'react-bootstrap'

let AddEvent = ({ user, apiClient }) => {
    return (
        <>
            <HeaderNav />
            <Container>
                <h3 className="my-5">Add Event</h3>
                <EventForm user={user} apiClient={apiClient}/>
            </Container>
        </>
    )
}

export default AddEvent