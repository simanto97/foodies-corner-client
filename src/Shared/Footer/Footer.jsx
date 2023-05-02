import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-success">
      <Container className="d-flex gap-4 justify-content-center align-items-center align-self-end text-light">
        <div className="me-4 p-4">
          <h5>Opening Times</h5>
          <p>Monday – Thursday: 08AM – 10PM </p>
          <p>Friday – Saturday: 10AM–11:30PM </p>
          <p>
            Sunday: <span className="text-warning">Closed</span>
          </p>
          <p>Booking TIme: 24/7 Hours</p>
        </div>
        <div className="ms-4 p-4">
          <h4>Contact Info</h4>
          <p>
            <span className="text-white">Address:</span> New Hyde Park, NY 11040
          </p>
          <p>
            <span className="text-white">Email:</span> example@info.com
          </p>
          <p>
            <span className="text-white">Call:</span> (+91)-213-666-0027
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
