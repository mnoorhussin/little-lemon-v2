import React from 'react';
import Nav from '../components/ReservationNav';
import { Container, Row } from 'react-bootstrap';

const ConfirmedBooking = () => {
  return (
    <div>
<Nav />
    <Container>
      <Row>

      <h1 className="text-center my-5">Reservation confirmed</h1>
      <p className="lead">
        Thank you for your reservation! We look forward to hosting you and your guests on your selected date and time.
      </p>
      </Row>
    </Container>
    </div>
    
  );
}

export default ConfirmedBooking;
