import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Hero from "./components/hero";
import Testimonials from "./components/testimonials";
import Menu from "./components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/signup";
import Footer from "./components/footer"
import MenuTitle from "./components/menu-title"
import BookingPage from "./components/BookingPage"




function App() {
  return (

    <>
      <Navbar />
      <Hero />
      <MenuTitle />
      <Menu />
      <About />
      <Testimonials />
      <Signup />
      <Footer />
      <BookingPage />

    </>


  );


}

export default App;
