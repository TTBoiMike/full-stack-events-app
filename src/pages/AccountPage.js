import { Container } from 'react-bootstrap';
import { HeaderNav, AccountDetails } from '../components'

let AccountPage = (props) => {
    return (
        <>
            <HeaderNav />
            <Container>
                <AccountDetails logout={props.logout} user={props.user} events={props.events} apiClient={props.apiClient}/>
            </Container>
        </>
    )
}

export default AccountPage