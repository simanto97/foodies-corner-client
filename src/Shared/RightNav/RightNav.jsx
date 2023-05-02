import React from "react";
import recipe1 from "../../assets/Recipes/recipe1.jpg";
import recipe2 from "../../assets/Recipes/recipe2.jpg";
import recipe3 from "../../assets/Recipes/recipe3.jpg";
import { Container } from "react-bootstrap";

const RightNav = () => {
  return (
    <Container className="my-4 d-flex justify-content-center flex-column">
      <h2 className="fs-1 fw-bold text-center text-success">
        Popular Recipes of our Chefs
      </h2>
      <div>
        <img
          className="my-4 shadow"
          style={{ height: "180px", width: "250px" }}
          src={recipe1}
          alt=""
        />
        <img
          className="mb-4 shadow"
          style={{ height: "180px", width: "250px" }}
          src={recipe2}
          alt=""
        />
        <img
          className="mb-4 shadow"
          style={{ height: "180px", width: "250px" }}
          src={recipe3}
          alt=""
        />
      </div>
    </Container>
  );
};

export default RightNav;
