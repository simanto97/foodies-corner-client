import React from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import Footer from "../../Shared/Footer/Footer";

const Blogs = () => {
  return (
    <Container>
      <NavigationBar></NavigationBar>

      <div>
        <h5>
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h5>
        <p>
          Controlled components in React are those in which form data is handled
          by the component’s state. Forms are used to store information in a
          document section. The information from this form is typically sent to
          a server to perform an action. This data is held by form input
          elements and control elements, such as input, select, textarea, etc.,
          which maintain and control their states or values. <br /> <br />
          Uncontrolled components are those for which the form data is handled
          by the DOM itself. “Uncontrolled” refers to the fact that these
          components are not controlled by React state. The values of the form
          elements are traditionally controlled by and stored on the DOM. We
          will have to refer to the instance of the form elements to retrieve
          their values from the DOM.
        </p>
        <h5>2. How to validate React props using PropTypes</h5>
        <p>
          Props and PropTypes are important mechanisms for passing read-only
          attributes between React components. We can use React props, short for
          properties, to send data from one component to another. If a component
          receives the wrong type of props, it can cause bugs and unexpected
          errors in your app. Since JavaScript doesn’t have a built-in type
          checking solution, many developers use extensions like TypeScript and
          Flow. However, React has an internal mechanism for props validation
          called PropTypes. In this article, we’ll learn how to validate props
          with React PropTypes.
        </p>
      </div>
      <Footer></Footer>
    </Container>
  );
};

export default Blogs;
