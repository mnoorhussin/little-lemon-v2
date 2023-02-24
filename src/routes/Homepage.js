import React from "react";
import Navbar from "../components/navbar";
import About from "../components/about";
import Hero from "../components/hero";
import Testimonials from "../components/testimonials";
import Menu from "../components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import MenuTitle from "../components/menu-title";


function Homepage() {
  return (
    <>

        <Navbar />
        <Hero />
        <MenuTitle />
        <Menu />
        <About />
        <Testimonials />
        <Footer />
    </>
  );
}

export default Homepage;
