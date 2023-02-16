import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Hero from "./components/hero";
import Testimonials from "./components/testimonials";
import Menu from "./components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/signup";
import Footer from "./components/footer"




function App() {
  return (

    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Signup />
      <Footer />

    </>


  );


}

export default App;
