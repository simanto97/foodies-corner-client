import React from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const RecipeCard = ({ recipe }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        style={{ height: "12rem" }}
        variant="top"
        src={recipe.recipe_img}
      />
      <Card.Header className="d-flex justify-content-between">
        <div>
          <Rating
            className="text-warning"
            placeholderRating={recipe.rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          <span className="ms-2">{recipe.rating}</span>
        </div>
        <FaHeart></FaHeart>
      </Card.Header>
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>{recipe.method}</Card.Text>
        <Card.Text>
          <h6>Ingredients: </h6>
          {recipe.ingredients.map((n) => (
            <li>{n}</li>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
