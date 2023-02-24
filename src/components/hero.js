import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";



const Hero = () => {
  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <Row>
          <Col md={5} className="text-light text-center ">
            <h1 className="display-2"><span>Little Lemon</span></h1>
            <h4 className="display-5"><span>Lausanne</span></h4>
            <p className="lead bg-dark">Little Lemon is a cozy restaurant serving
              delicious, fresh, and locally-sourced cuisine in a warm and inviting
              atmosphere. With a focus on seasonal ingredients and classic cooking
              techniques,Little Lemon offers a delightful dining experience for all taste buds.</p>
              <NavLink to="/reservations"><Button className="btn btn-warning btn-lg">Reserve a Table</Button></NavLink>
          </Col>
        </Row>
      </div>
    </section>

  );
};

export default Hero;