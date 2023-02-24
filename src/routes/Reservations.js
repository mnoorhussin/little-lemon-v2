import React from 'react';
import Nav from '../components/ReservationNav';
import Footer from '../components/footer';
import ReservationsPage from '../components/ReservationsPage';

const Reservations = () => {
  return (
    <div>
      <Nav />
      <ReservationsPage />
      <Footer />
    </div>
  )
}

export default Reservations