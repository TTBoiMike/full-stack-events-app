import { Container } from 'react-bootstrap';
import HeaderNav from '../components/HeaderNav'
import EventsTable from '../components/EventsTable'
import EventFilterBar from '../components/EventFilterBar'


let EventsPage = () => {
    return (
        <>
            <HeaderNav />
            <Container>
                <EventFilterBar />
                <EventsTable />
            </Container>
        </>
    )
}

export default EventsPage