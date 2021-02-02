import React from 'react'
import {Card} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Login extends React.Component {

    render() {
        return (
            <Container className="mt-5 d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
                </Card>
            </Container>
        )
    }

}

export default Login