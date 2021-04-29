import { Button, Table } from 'react-bootstrap';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import {useUser} from '../assets/User.context'

let AccountDetails = ({ logout, events, apiClient }) => {
    const user = useUser();

    console.log("user", user)

    let userEvents = (id) => {
        let userEvents = events.filter(event => event.user === user.username)
        return userEvents.length;
    }

    let deleteAccount = (id) => {
        apiClient.deleteUser(id)
            .then(() => {
                toastr.success("Account Deleted!")
                logout()

            })
            .catch(err => {
                toastr.warning("Sorry, unable to delete account at this time.")
        })
    }

    return (
        <>
            <h2 className="mt-5">
                Profile
            </h2>
            <Table className="my-5" variant="dark" bordered striped>
                <thead>
                    <tr>
                        <td>
                            Username
                                </td>
                        <td>
                            Events in schedule
                                </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {user.username}
                        </td>
                        <td>
                            {userEvents(user.username)}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="btn button" className="mr-3" onClick={logout}>
                Logout
                    </Button>
            <button className="btn button-delete" onClick={ () => deleteAccount(user.id)}>
                Delete Account
            </button>
        </>
    )
}

export default AccountDetails