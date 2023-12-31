import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import ActiveLink from "../../Pages/Home/ActiveLink/ActiveLink";

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
              <ActiveLink className="me-3" to="/">
                Home
              </ActiveLink>
              <ActiveLink className="ms-2" to="/blogs">
                Blog
              </ActiveLink>
            </Nav>
            <Nav className="d-flex align-items-center gap-2">
              {user && <span>{user.displayName}</span>}

              {user && (
                <img
                  title={user.displayName}
                  className="rounded-circle"
                  style={{ height: "50px", width: "50px" }}
                  src={user.photoURL}
                  alt="User"
                />
              )}
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
