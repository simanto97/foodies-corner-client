import React from "react";
import Recipes from "../Pages/Recipes/Recipes/Recipes";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import LeftNav from "../Shared/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";

const RecipeCardLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={12}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default RecipeCardLayout;
