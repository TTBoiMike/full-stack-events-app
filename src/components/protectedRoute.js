import { Route, Redirect } from 'react-router-dom'

let ProtectedRoute = ({ component: Component, loggedIn, props, ...rest }) => {
    return (
        <Route {...rest} render={(matchProps) => loggedIn ?
            (<Component {...props} {...matchProps} />) : (<Redirect to={{ pathname: "/" }} />)
        } />
    )
}
export default ProtectedRoute