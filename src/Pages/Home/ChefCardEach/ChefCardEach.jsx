import React from "react";
import { Button, Card } from "react-bootstrap";

const ChefCardEach = ({ chef }) => {
  const {
    id,
    picture,
    name,
    years_of_experience,
    num_recipes,
    likes,
    recipes,
  } = chef;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "250px" }} variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Experience: {years_of_experience} years</p>
            <p>{likes}</p>
          </Card.Text>
          <Button variant="success">View Recipes</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefCardEach;
