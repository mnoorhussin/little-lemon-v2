import React from "react";
import '../App.css';
import { Container, Row, Col, Button } from "react-bootstrap";


const Menu = () => {
  return (
<Container>
  <Row className="d-flex align-items-center">
    <Col sm={8}>
      <h2 className='display-4'>Our Specialties</h2>
    </Col>
    <Col sm={4} className="d-flex justify-content-end">
      <Button variant="secondary">Online Menu</Button>
    </Col>
  </Row>
</Container>
  );
}

export default Menu;
