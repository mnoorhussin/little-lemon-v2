import React from "react";
import '../App.css';

import { Container, Row, Col, Card} from "react-bootstrap";


const Menu = () => {
  return (
    <Container fluid className="my-5 container" id="menu">
      <Row>
        <Col md={4} className="pb-sm-3">
          <Card>
            <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/images/dish1.jpg'} alt="Menu Image"/><Card.Body>
              <Card.Title className="display-5">Spicy Garlic Noodles</Card.Title>
              <Card.Text className="lead">Spicy garlic noodles are a popular Chinese-inspired dish that combines thick, chewy noodles with a flavorful sauce made from garlic, soy sauce, and chili paste. The dish is typically served with a variety of toppings,is of.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="pb-sm-3">
          <Card>
		  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/images/dish2.jpg'} alt="Menu Image" /><Card.Body>
              <Card.Title className="display-5">Lemon Garlic Chicken</Card.Title>
              <Card.Text className="lead">Tender chicken breasts marinated in a zesty lemon garlic sauce and grilled to perfection. Served with a side of roasted vegetables and garlic mashed potatoes. A satisfying and flavorful dish that's perfect for a hearty meal.</Card.Text>
            </Card.Body>
          </Card >
        </Col>
        <Col md={4} className="pb-sm-3">
          <Card>
		  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/images/dish3.jpg'} alt="Menu Image"/><Card.Body>
              <Card.Title className="display-5">Mac and Cheese Deluxe</Card.Title>
              <Card.Text className="lead">A classic American dish made with elbow macaroni and a rich and creamy cheese sauce. Our deluxe version is made with a blend of cheddar, mozzarella, and parmesan cheeses, and topped with a golden breadcrumb crust for added .</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Menu;
