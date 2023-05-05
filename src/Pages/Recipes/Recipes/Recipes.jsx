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
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-3 shadow w-75 mx-auto">
        <img style={{ width: "250px" }} src={picture} alt="" />
        <div>
          <h3 className="text-success">{name}</h3>
          <p>
            A great chef has to be passionate about food and cooking. They have
            to genuinely enjoy the whole process of procuring, preparing,
            cooking and serving food and have to be able to design menus too.
          </p>
          <h6>Experience: {years_of_experience} years</h6>
          <h6>Recipes: {num_recipes}</h6>
          <h6>Likes: {likes}</h6>
        </div>
      </div>
      <div className="d-md-flex justify-content-center gap-2 mt-4 p-3">
        {chefRecipes.map((recipe) => (
          <RecipeCard key={recipe.r_id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </Container>
  );
};

export default Recipes;
