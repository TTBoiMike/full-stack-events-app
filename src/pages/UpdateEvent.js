import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { HeaderNav, UpdateEventForm } from "../components";

let UpdateEvent = ({apiClient}) => {
  const eventId = useParams() 
    
  return (
    <>
      <HeaderNav />
      <Container>
        <h3 className="my-5">Update Event</h3>
        <UpdateEventForm apiClient={apiClient} eventId={eventId.id} />
      </Container>
    </>
  );
};

export default UpdateEvent;
