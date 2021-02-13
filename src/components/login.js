import React from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import {Card} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDisabled: false,
            signupDisabled: false
        }
    }

    submitLogin(e) {
        e.preventDefault()
        this.setState({loginDisabled: true})
        this.props.client.logIn(e.target.username.value, e.target.password.value)
        .then(response => {
            this.setState({loginDisabled: false})
            let {_id} = response.data._doc
            this.props.login(_id, response.data.token)
        })
        .catch(err => {
            alert("Unable to login at this time")
            console.log(err)
            this.setState({loginDisabled: false})
        })
    }

    submitSignUp(e) {
        e.preventDefault();
        this.setState({signupDisabled: true})
        this.props.client.signUp(e.target.username.value, e.target.password.value)
            .then(response => {
                if(response.status === 200) {
                    toastr.success(`User created: ${e.target.username.value}`)
                } else {
                    toastr.error('An error occured.')
                }
                this.setState({signupDisabled: false})
            })
            .catch(err => {
                alert("Unable to signup at this time")
                console.log(err)
                this.setState({signupDisabled: false})
            })
            .finally(() => document.getElementById('signup-form').reset())
    }

    render() {
        return (
            <Container className="mt-5 d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                <Card.Header>
                    Login
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={(e) => this.submitLogin(e)}>
                        <Form.Group controlId="formBasicEmail" id="login-form">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" name="username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" name="password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <small>username: mike, keith, july <br/> password: test</small>
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
                </Card.Body>
                </Card> */}
            
            </Container>
        )
    }

}

export default Login