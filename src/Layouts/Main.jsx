import React from "react";
import Footer from "../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Banner from "../Pages/Home/Banner/Banner";
import ChefCard from "../Pages/Home/ChefCard/ChefCard";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={12}>
            <Banner></Banner>
            <RightNav></RightNav>
            <LeftNav></LeftNav>
            <ChefCard></ChefCard>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
