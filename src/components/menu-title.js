import React from "react";
import '../App.css';
import MenuPDF from "../assets/Little Lemon Restaurant Menu.pdf";
import { Container, Row, Col, Button } from "react-bootstrap";


const Menu = () => {
  return (
<Container>
  <Row className="d-flex align-items-center">
    <Col sm={8}>
      <h2 className='display-4'>Our Specialties</h2>
    </Col>
    <Col sm={4} className="d-flex justify-content-end">
    <Button href={MenuPDF} target="_blank" rel="noreferrer" className="btn btn-warning btn-lg ">Online Menu</Button>
    </Col>
  </Row>
</Container>
  );
}

export default Menu;
