import React from "react";
import recipe1 from "../../assets/Recipes/recipe1.jpg";
import recipe2 from "../../assets/Recipes/recipe2.jpg";
import recipe3 from "../../assets/Recipes/recipe3.jpg";
import recipe4 from "../../assets/Recipes/recipe4.jpg";
import { Container } from "react-bootstrap";

const RightNav = () => {
  return (
    <Container className="my-4 d-flex justify-content-center flex-column">
      <h2 className="fs-1 fw-bold text-center p-5">
        Popular Recipes of our <br />
        <span className="text-success">Chefs</span>
      </h2>
      <div className="d-md-flex justify-content-between align-items-center">
        <img
          className="shadow my-4"
          style={{ height: "200px", width: "300px" }}
          src={recipe1}
          alt=""
        />
        <img
          className="shadow my-4"
          style={{ height: "200px", width: "300px" }}
          src={recipe2}
          alt=""
        />
        <img
          className="shadow my-4"
          style={{ height: "200px", width: "300px" }}
          src={recipe3}
          alt=""
        />
        <img
          className="shadow my-4"
          style={{ height: "200px", width: "300px" }}
          src={recipe4}
          alt=""
        />
      </div>
    </Container>
  );
};

export default RightNav;
