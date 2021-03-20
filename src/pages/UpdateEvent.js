// import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { HeaderNav, UpdateEventForm } from '../components'

let UpdateEvent = (props) => {
    const eventId = props.match.params.id;


    return (
        <>
            <HeaderNav />
            <Container>
                <h3 className="my-5">Update Event</h3>
                <UpdateEventForm />
            </Container>
        </>
    )
}

export default UpdateEvent