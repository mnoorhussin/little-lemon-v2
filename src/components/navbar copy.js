import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";



const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/images/logo1.png'} alt="Logo" style={{ height: 50 , paddingLeft:200}} />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex justify-content-around w-100 " style={{ paddingRight:320}}>
          <Nav className="ms-auto nav-items">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/order-online">Order Online</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
