import React, { useReducer } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";

const BookingForm = ({ bookingData = { date: "" }, onBookingChange, availableTimes, onDateChange }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "initialize":
          return { times: availableTimes };
        case "updateTimes":
          // Replace this with a function that returns updated times based on the selected date
          return { times: availableTimes };
        default:
          throw new Error();
      }
    },
    { times: [] }
  );

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    onBookingChange({ ...bookingData, [name]: value });
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "updateTimes", payload: { date: value } });
    onDateChange(value);
  };

  return (
    <Container>
      <Row>
        <Form>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              id="date-input"
              name="date"
              value={bookingData.date}
              onChange={handleDateChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Time</Form.Label>
            <Form.Control
              as="select"
              id="time-input"
              name="time"
              value={bookingData.time}
              onChange={handleBookingChange}
            >
              {state.times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Guests</Form.Label>
            <Form.Control
              type="number"
              id="guests-input"
              name="guests"
              min="1"
              max="10"
              value={bookingData.guests}
              onChange={handleBookingChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Occasion</Form.Label>
            <Form.Control
              as="select"
              id="occasion-input"
              name="occasion"
              value={bookingData.occasion}
              onChange={handleBookingChange}
            >
              <option value="">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Make Your Reservation
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default BookingForm;
