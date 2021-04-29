import { Route, Redirect } from 'react-router-dom'

let ProtectedRoute = ({loggedIn, children, ...rest }) => {
    return (
        <Route {...rest} render={() => loggedIn ?
            (children) : (<Redirect to={{ pathname: "/" }} />)
        } />
    )
}
export default ProtectedRoute
