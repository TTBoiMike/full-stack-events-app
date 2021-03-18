import { Route, Redirect } from 'react-router-dom'

let ProtectedRoute = ({ component: Component, loggedIn, props }) => {
    
    return (
        <Route render={() => loggedIn ?
            (<Component {...props} />) : (<Redirect to={{ pathname: "/" }} />)
        } />
    )
}
export default ProtectedRoute