import React from 'react';
import '../App.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
<footer className="footer text-light py-5 text-white">
  <Container>
    <Row>
      <Col md={3}>
        <img
          src={require("../assets/footer-logo.png")}
          alt="Little Lemon footer logo" className="footer-logo"
        />
      </Col>
      <Col md={3} className="footer-links">
        <h5 className="text-white">Menu</h5>
        <Nav className="flex-column">
          <Nav.Link href="#" className="text-white">Appetizers</Nav.Link>
          <Nav.Link href="#" className="text-white">Entrees</Nav.Link>
          <Nav.Link href="#" className="text-white">Desserts</Nav.Link>
          <Nav.Link href="#" className="text-white">Drinks</Nav.Link>
        </Nav>
      </Col>
      <Col md={3} className="footer-col">
        <h5 className="text-white">Contact Us</h5>
        <p className="text-white">
          123 Main Street, Lausanne, Switzerland
          <br />
          Phone: (555) 555-5555
          <br />
          Email: info@littlelemonrestaurant.com
        </p>
      </Col>
      <Col md={3} className="social-links">
        <h5 className="text-white">Follow Us</h5>
        <Nav className="flex-column ">
          <Nav.Link href="#" className="text-white">
            <FaFacebook className="mr-2" /> Facebook
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <FaTwitter className="mr-2" /> Twitter
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <FaInstagram className="mr-2" /> Instagram
          </Nav.Link>
        </Nav>
      </Col>
    </Row>
  </Container>
</footer>

  );
};

export default Footer;