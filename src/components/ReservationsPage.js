import React from 'react';
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingForm from './BookingForm';

function ReservationsPage() {

  return (
<Container>
  <Row>
  <div className="res-content-wrapper py-5">
        <div className="res-content-container">
        <div className="form">
                <h1>Reserve a Table</h1>
                <BookingForm />
            </div>
        </div>
    </div>
  </Row>
</Container>
  )
}
export default ReservationsPage