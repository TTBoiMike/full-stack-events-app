import { Table, Button } from 'react-bootstrap';

let EventsTable = () => {
    return (
        <>
            <Table responsive="lg" variant="dark" striped bordered hover>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Details</th>
                        <th>Location</th>
                        <th>Added by</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.buildEventRows()} */}
                </tbody>
            </Table>
        </>
    )
}

export default EventsTable