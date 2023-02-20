import React, { useState } from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const availableTimes = ["9:00", "11:00", "13:00", "15:00", "17:00"];

  const handleBookingChange = (data) => {
    setBookingData(data);
  };

  const handleDateChange = (value) => {
    // Use the value parameter instead of event.target.value
    setBookingData({ ...bookingData, date: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookingData);
  };

  return (
    <div>
      <h1>Make a Booking</h1>
      <BookingForm
        bookingData={bookingData}
        onBookingChange={handleBookingChange}
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default BookingPage;
