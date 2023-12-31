import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import Footer from "../../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleGitAuth from "../../Shared/GoogleGitAuth/GoogleGitAuth";
import "./Register.css";

const Register = () => {
  const { registerUser, updateUserProfile, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password need minimum 6 characters");
      return;
    }
    if ((email, password)) {
      registerUser(email, password)
        .then((result) => {
          updateUserProfile(name, photo)
            .then((result) => {
              setError("");
              const loggedUser = result.user;
              setUser(loggedUser);
            })
            .catch((error) => console.log(error.message));
        })
        .catch((error) => setError(error.message.split("/")[1].split(")"[0])));
    }
  };
  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container className="w-25 mobile-width mx-auto shadow-lg">
        <h2 className="fs-2 fw-bold text-center text-success mt-5 pt-1">
          Hello there! Please Register
        </h2>
        <Form onSubmit={handleRegister} className="p-4 m-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Photo URL" />
          </Form.Group>
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
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              label="Accept Terms and Conditions"
            />
          </Form.Group>
          <Button variant="success" disabled={!accepted} type="submit">
            Register
          </Button>
          <br />
          <Form.Text>
            Already have an account? Please <Link to="/login">Login</Link>
          </Form.Text>{" "}
          <br />
          <Form.Text className="text-danger fs-5">{error}</Form.Text>
        </Form>
        <GoogleGitAuth></GoogleGitAuth>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Register;
