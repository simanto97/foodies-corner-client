import React from "react";
import recipe1 from "../../assets/Recipes/recipe1.jpg";
import recipe2 from "../../assets/Recipes/recipe2.jpg";
import recipe3 from "../../assets/Recipes/recipe3.jpg";
import { Container } from "react-bootstrap";

const RightNav = () => {
  return (
    <div>
      <h2 className="text-success">Popular Recipes of our Chefs</h2>
      <Container>
        <img
          className="my-4"
          style={{ height: "180px", width: "250px" }}
          src={recipe1}
          alt=""
        />
        <img
          className="mb-4"
          style={{ height: "180px", width: "250px" }}
          src={recipe2}
          alt=""
        />
        <img
          className="mb-4"
          style={{ height: "180px", width: "250px" }}
          src={recipe3}
          alt=""
        />
      </Container>
    </div>
  );
};

export default RightNav;
