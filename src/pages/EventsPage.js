import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from '../components/HeaderNav'
import EventsTable from '../components/EventsTable'
import EventsFilterBar from '../components/EventsFilterBar'


let EventsPage = ({ apiClient, user }) => {
    let [events, setEvents] = useState([])
    let [eventsToShow, setEventsToShow] = useState([])

    let fetchEvents = async () => {
        let events = await apiClient.getEvents();
        setEvents(events.data)
        setEventsToShow(events.data)
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


    let filterEvents = (filterBy) => {
        if (filterBy === "favourites") {
            let favouritedEvents = events.filter(event => event.favourite)
            setEventsToShow(favouritedEvents)
        } else if (filterBy === "upcoming") {
            let today = new Date()
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            let filterByDate = events.filter(event => new Date(event.date) > new Date(today))
            let chronoDates = filterByDate.sort((a, b) => new Date(a.date) - new Date(b.date))
            setEventsToShow(chronoDates)
        } else {
            setEventsToShow(events)
        }
    }

    return (
        <>
            <HeaderNav />
            <Container>
                <EventsFilterBar filterEvents={filterEvents} allEvents={events} />
                <EventsTable events={eventsToShow} apiClient={apiClient} favouriteEvent={favouriteEvent} />
            </Container>
        </>
    )
}

export default EventsPage