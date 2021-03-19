import { HeaderNav, EventForm } from '../components'
import { Container } from 'react-bootstrap'

let AddEvent = ({ user, apiClient }) => {
    return (
        <>
            <HeaderNav />
            <Container>
                <EventForm user={user} apiClient={apiClient}/>
            </Container>
        </>
    )
}

export default AddEvent