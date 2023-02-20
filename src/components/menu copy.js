import React from "react";
import '../App.css';

import { Container, Row, Col, Card, Button } from "react-bootstrap";


const Menu = () => {
  return (
    <Container fluid className="my-5" id="menu">
      <Row>
      <Col md={1}>
        </Col>
        <Col md={8}>
          <h2 className="font-weight-bold">Our Specialties</h2>
        </Col>
        <Col md={3} className="d-flex align-items-end">
          <Button variant="secondary">Online Menu</Button>
        </Col>
      </Row>
      <Row className="mt-5 ">

        <Col md={4} >
          <Card className="card-equal-height">
            <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/images/dish1.jpg'} alt="Hero Image"/>
            <Card.Body>
              <Card.Title>Special Dish 1</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Nullam auctor lectus vel gravida consectetur. Aenean malesuada placerat blandit.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} >
          <Card className="card-equal-height">
		  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/images/dish2.jpg'} alt="Hero Image" />            <Card.Body>
              <Card.Title>Special Dish 2</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				 Nullam auctor lectus vel gravida consectetur. Aenean malesuada placerat blandit.</Card.Text>
            </Card.Body>
          </Card >
        </Col>
        <Col md={4} >
          <Card className="card-equal-height">
		  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/images/dish3.jpg'} alt="Hero Image" className="card-equal-height"/>            <Card.Body>
              <Card.Title>Special Dish 3</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				 Nullam auctor lectus vel gravida consectetur. Aenean malesuada placerat blandit.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Menu;
