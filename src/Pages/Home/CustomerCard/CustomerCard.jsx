import React from "react";
import { Card } from "react-bootstrap";

const CustomerCard = ({ customer }) => {
  const { id, name, location, photo, feedback } = customer;
  return (
    <div className="text-center mt-2 shadow-sm">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="mx-auto my-2 w-25 rounded-circle"
          variant="top"
          src={photo}
        />
        <Card.Body>
          <Card.Title className="text-success">{name}</Card.Title>
          <Card.Text>{feedback}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomerCard;
