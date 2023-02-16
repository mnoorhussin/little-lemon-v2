import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";



const Hero = () => {
  return (
    <Container fluid className="hero py-5" id="hero">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-left py-5">
          <h1 className="display-3 bg-dark ">Little Lemon</h1>
          <h4 className="display-2 bg-dark">Lausanne</h4>
          <p className="lead bg-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi non bibendum aliquam.</p>
          <Button variant="primary" size="lg" className="hero-btn">Reserve a Table</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;