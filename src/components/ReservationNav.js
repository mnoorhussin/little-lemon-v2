import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const NavBar = (e) => {
  return (
    <Navbar bg="light" expand="lg" className="navbar sticky-top">
      <div className="container">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo1.png"}
            alt="Logo"
            className="logo"
          />
        </Link>
        <Link to="/">
        <Button className="btn btn-warning ">
            Return</Button>
        </Link>
      </div>
    </Navbar>
  );
};

export default NavBar;