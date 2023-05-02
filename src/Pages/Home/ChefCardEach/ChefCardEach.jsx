import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

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
      <Card style={{ width: "18rem" }} className="text-center">
        <Card.Img style={{ height: "250px" }} variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="fs-3">{name}</Card.Title>
          <Card.Text>
            <p>Experience: {years_of_experience} years</p>
            <p>Number of Recipes: {num_recipes}</p>
            <p>
              <FaHeart className="text-danger"></FaHeart> {likes}
            </p>
          </Card.Text>
          <Button variant="success">View Recipes</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefCardEach;