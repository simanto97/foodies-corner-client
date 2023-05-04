import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-success">
      <Container className="d-flex gap-md-4 justify-content-center align-items-md-center text-light">
        <div className="me-md-4 p-md-4 m-3 py-2">
          <h4>Opening Times</h4>
          <p className="m-1">
            <small>Monday – Thursday: 08AM – 10PM </small>
          </p>
          <p className="m-1">
            <small>Friday – Saturday: 10AM–11:30PM</small>
          </p>
          <p className="m-1">
            <small>
              Sunday: <span className="text-warning">Closed</span>
            </small>
          </p>
          <p className="m-1">
            <small>Booking TIme: 24/7 Hours</small>
          </p>
        </div>
        <div className="ms-md-4 p-md-4 m-3 py-2">
          <h4>Contact Info</h4>
          <p className="m-1">
            <small>
              <span className="text-white">Address:</span> New Hyde Park, NY
              11040
            </small>
          </p>
          <p className="m-1">
            <small>
              <span className="text-white">Email:</span> example@info.com
            </small>
          </p>
          <p className="m-1">
            <small>
              <span className="text-white">Call:</span> (+91)-213-666-0027
            </small>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
