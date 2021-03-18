import React, { useState } from 'react';
import { Card, Form, Container, Button } from 'react-bootstrap';

let Login = (props) => {
    // disabled login button to prevent multiple requests
    let [disabled, setDisabled] = useState(false)

    let handleLogin = (e) => {
        e.preventDefault();
        setDisabled(true)
        props.apiClient.logIn(e.target.username.value, e.target.password.value)
            .then(response => {
                console.log(response)
                const user = { username: response.data._doc.username, id: response.data._doc._id }
                props.logInFunc(user, response.data.token)
                setDisabled(false)
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 401) {
                    alert("Username or password incorrect")
                } else {
                    alert("Sorry. Unable to log in at the moment.")
                }
            })
    }

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    Login
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={(e) => handleLogin(e)}>
                        <Form.Group controlId="formBasicEmail" id="login-form">
                            <input style={{width: "100%"}} placeholder="Username" className="input-styled" type="username" name="username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <input style={{width: "100%"}} placeholder="Password" className="input-styled" type="Password" name="password" />
                        </Form.Group>
                        <Button variant="primary" className="my-2" type="submit">
                            {disabled ? "...logging in" : "login"}
                        </Button>
                    </Form>
                    <small>username: mike, keith, july <br /> password: test</small>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login