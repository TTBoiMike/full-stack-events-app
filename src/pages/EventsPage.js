import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from '../components/HeaderNav'
import EventsTable from '../components/EventsTable'
import EventsFilterBar from '../components/EventsFilterBar'


let EventsPage = ({ apiClient, user }) => {
    const [events, setEvents] = useState([])

    let fetchEvents = async () => {
        let events = await apiClient.getEvents();
        setEvents(events.data)
    };

    useEffect(() => {
        fetchEvents()
    }, []);


    return (
        <>
            <HeaderNav />
            <Container>
                <EventsFilterBar />
                <EventsTable allEvents={events} user={user} />
            </Container>
        </>
    )
}

export default EventsPage