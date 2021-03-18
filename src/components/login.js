import React, { useState } from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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

<<<<<<< HEAD
    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    Login
                </Card.Header>
=======
    render() {
        return (
            <Container className="mt-5 d-flex justify-content-center align-items-center">
                <Card style={{ width: '18rem' }} className="login-container">
>>>>>>> ec386227a2d32cb187c7cc9ee2b456bf2ecdd503
                <Card.Body>
                    <Form onSubmit={(e) => handleLogin(e)}>
                        <Form.Group controlId="formBasicEmail" id="login-form">
                            <input style={{width: "100%"}} placeholder="Username" className="input-styled" type="username" name="username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <input style={{width: "100%"}} placeholder="Password" className="input-styled"type="Password" name="password" />
                        </Form.Group>
                        <Button variant="btn button" className="my-2" type="submit">
                            Login
                        </Button>
                    </Form>
<<<<<<< HEAD
                    <small>username: mike, keith, july <br /> password: test</small>
=======
                    <small>Sample username: mike, july, keith<br/> Sample password: test</small>
                </Card.Body>
                </Card>

                {/* <Card style={{ width: '18rem' }}>
                <Card.Header>
                    Signup
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={(e) => this.submitSignUp(e)} id="signup-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Create Username</Form.Label>
                            <Form.Control type="username" name="username" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Create Password</Form.Label>
                            <Form.Control type="Password" name="password" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Signup
                        </Button>
                    </Form>
>>>>>>> ec386227a2d32cb187c7cc9ee2b456bf2ecdd503
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login