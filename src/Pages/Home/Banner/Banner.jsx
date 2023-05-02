import React from "react";
import recipe1 from "../../../assets/Recipes/recipe1.jpg";
import recipe2 from "../../../assets/Recipes/recipe2.jpg";
import recipe3 from "../../../assets/Recipes/recipe3.jpg";
import { Carousel, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item interval={1200}>
          <img className="d-block w-100" src={recipe1} alt="First slide" />
          <Carousel.Caption>
            <h3>Pancake</h3>
            <p>
              A pancake is a breakfast dish, a flat cake that's made by pouring
              batter into a hot pan and frying it on both sides.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img className="d-block w-100" src={recipe2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Sesame Chicken</h3>
            <p>
              Sesame chicken is a dish commonly found in Chinese restaurants
              throughout the United States and Canada.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={recipe3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Bicky Burger</h3>
            <p>
              Bicky burger is a unique Belgian hamburger that is also popular in
              the Netherlands, consisting of a sesame seed-topped bun ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
