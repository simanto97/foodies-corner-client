import React, { useContext, useState } from "react";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import Footer from "../../Shared/Footer/Footer";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleGitAuth from "../../Shared/GoogleGitAuth/GoogleGitAuth";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container className="w-25 mx-auto shadow-lg">
        <h2 className="fs-2 fw-bold text-center text-success mt-5 pt-1">
          Hello there! Please Login
        </h2>
        <Form onSubmit={handleLogin} className="p-4 m-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name="accept" label="Remember Me" />
          </Form.Group>
          <Button variant="success" type="submit">
            Login
          </Button>{" "}
          <br />
          <Form.Text>
            Don't have an account? Please <Link to="/register">Register</Link>
          </Form.Text>
          <Form.Text className="success"></Form.Text> <br />
          <Form.Text className="danger">{error}</Form.Text>
        </Form>
        <GoogleGitAuth></GoogleGitAuth>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
