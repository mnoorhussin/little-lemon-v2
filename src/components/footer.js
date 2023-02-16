import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <h5>Menu</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Appetizers</Nav.Link>
              <Nav.Link href="#">Entrees</Nav.Link>
              <Nav.Link href="#">Desserts</Nav.Link>
              <Nav.Link href="#">Drinks</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Contact Us</h5>
            <p>
              123 Main Street, Anytown, USA
              <br />
              Phone: (555) 555-5555
              <br />
              Email: info@littlelemonrestaurant.com
            </p>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Follow Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">
                <FaFacebook /> Facebook
              </Nav.Link>
              <Nav.Link href="#">
                <FaTwitter /> Twitter
              </Nav.Link>
              <Nav.Link href="#">
                <FaInstagram /> Instagram
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
