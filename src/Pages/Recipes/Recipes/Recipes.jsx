import React, { useEffect, useState } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipes = () => {
  const chef = useLoaderData();
  const { name, picture, years_of_experience, likes, num_recipes } = chef;
  const chefRecipes = chef.recipes;
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center gap-4">
        <div>
          <img
            style={{ width: "25rem", height: "18rem" }}
            src={picture}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-success">{name}</h3>
          <p></p>
          <h6>Experience: {years_of_experience} years</h6>
          <h6>Recipes: {num_recipes}</h6>
          <h6>Likes: {likes}</h6>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {chefRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </Container>
  );
};

export default Recipes;
