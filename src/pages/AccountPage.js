import { Container } from 'react-bootstrap';
import { HeaderNav, AccountDetails } from '../components'

let AccountPage = (props) => {
    return (
        <>
            <HeaderNav />
            <Container>
                <AccountDetails logout={props.logout} />
            </Container>
        </>
    )
}

export default AccountPage