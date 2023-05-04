import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
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
              <Link className="text-decoration-none me-3 text-secondary" to="/">
                Home
              </Link>
              <Link
                className="text-decoration-none m-0 text-secondary"
                to="/blog"
              >
                Blog
              </Link>
            </Nav>
            <Nav className="d-flex align-items-center gap-2">
              {user && <FaUserCircle className="fs-1"></FaUserCircle>}

              {user ? (
                <Button onClick={handleLogout} variant="success">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="success">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
