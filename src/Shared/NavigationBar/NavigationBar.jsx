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
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Recipes</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="success">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
