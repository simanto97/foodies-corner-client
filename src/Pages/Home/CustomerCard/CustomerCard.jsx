import React from "react";
import { Card } from "react-bootstrap";

const CustomerCard = ({ customer }) => {
  const { id, name, location, photo, feedback } = customer;
  return (
    <Card
      className="text-center mt-2 shadow-sm"
      style={{ width: "18rem", height: "18rem" }}
    >
      <Card.Img
        className="mx-auto my-2 w-25 rounded-circle"
        variant="top"
        src={photo}
      />
      <Card.Body>
        <Card.Title className="text-success">{name}</Card.Title>
        <Card.Text>
          <small>{location}</small>
        </Card.Text>
        <Card.Text>{feedback}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomerCard;
