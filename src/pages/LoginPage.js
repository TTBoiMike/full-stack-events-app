import Login from '../components/login'
import { Redirect } from 'react-router-dom'

let LoginPage = (props) => {
    return props.loggedIn ? (<Redirect to={{ pathname: "/events" }} />) : (<Login {...props}/>)
}

export default LoginPage