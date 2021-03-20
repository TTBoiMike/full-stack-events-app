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

    let favouriteEvent = (id) => {
        let [event] = events.filter(event => event._id === id);
        event.favourite = !event.favourite
        apiClient.updateEvent(id, event)
            .then(() => {
                fetchEvents()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <HeaderNav />
            <Container>
                <EventsFilterBar />
                <EventsTable allEvents={events} apiClient={apiClient} favouriteEvent={favouriteEvent}/>
            </Container>
        </>
    )
}

export default EventsPage