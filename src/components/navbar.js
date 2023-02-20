import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import '../App.css';
import { Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




const NavBar = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg" className="navbar sticky-top">
        <div className="container">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/images/logo1.png'} alt="Logo" className="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex ms-auto">
            <Nav className="ms-auto nav-items">
              <Nav.Link className="nav-item" href="#about">About</Nav.Link>
              <Nav.Link className="nav-item" href="#menu">Menu</Nav.Link>
              <Nav.Link className="nav-item" href="#order-online">Order Online</Nav.Link>
              <Nav.Link className="nav-item" href="#login">Login</Nav.Link>
              <Nav.Link className="nav-item" href="#ReserveATable">Reserve a Table</Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
        </div>
 
      </Navbar>
    </Router>
  );
};

export default NavBar;
