import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link
            className="text-success text-decoration-none fs-1 fw-bold"
            to="/"
          >
            F<span className="text-black">oo</span>diesCorner
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link
                className="text-decoration-none m-0 text-secondary me-3"
                to="/"
              >
                Home
              </Link>
              <Link className="text-decoration-none m-0 text-secondary" to="">
                Blog
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">profile</Nav.Link>
              <Link to="/login">
                <Button variant="success">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
