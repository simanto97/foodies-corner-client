import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Recipes = () => {
  const chef = useLoaderData();
  const { name, picture, years_of_experience, likes, num_recipes } = chef;
  return (
    <Container>
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <h3></h3>
      </div>
    </Container>
  );
};

export default Recipes;
