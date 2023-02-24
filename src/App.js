import React from "react";
import Homepage from "./routes/Homepage";
import Reservations from "./routes/Reservations";
import ConfirmedBooking from "./routes/ConfirmedBooking";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Homepage />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/ConfirmedBooking" element = {<ConfirmedBooking />}/>
      </Routes>
    </>
  );
}

export default App;
