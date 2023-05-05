import React from "react";
import { Button, Container } from "react-bootstrap";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import Footer from "../../Shared/Footer/Footer";
import Pdf from "react-to-pdf";
import { FaPrint } from "react-icons/fa";
const ref = React.createRef();
const Blogs = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container className="d-flex justify-content-center my-3">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <Button variant="success" className="text-white" onClick={toPdf}>
              Generate Pdf <FaPrint></FaPrint>{" "}
            </Button>
          )}
        </Pdf>
      </Container>
      <Container className="my-5" ref={ref}>
        <h3 className="fw-bold my-3">
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h3>
        <p className="my-2">
          <span className="fw-bold">Controlled components: </span>Controlled
          components in React are those in which form data is handled by the
          component’s state. Forms are used to store information in a document
          section. The information from this form is typically sent to a server
          to perform an action. This data is held by form input elements and
          control elements, such as input, select, textarea, etc., which
          maintain and control their states or values. <br /> <br />
          <span className="fw-bold">Uncontrolled components: </span>
          Uncontrolled components are those for which the form data is handled
          by the DOM itself. “Uncontrolled” refers to the fact that these
          components are not controlled by React state. The values of the form
          elements are traditionally controlled by and stored on the DOM. We
          will have to refer to the instance of the form elements to retrieve
          their values from the DOM.
        </p>
        <h3 className="fw-bold my-3">
          2. How to validate React props using PropTypes?
        </h3>
        <p className="my-2">
          <span className="fw-bold">Validate React Props: </span>Props and
          PropTypes are important mechanisms for passing read-only attributes
          between React components. We can use React props, short for
          properties, to send data from one component to another. If a component
          receives the wrong type of props, it can cause bugs and unexpected
          errors in your app. Since JavaScript doesn’t have a built-in type
          checking solution, many developers use extensions like TypeScript and
          Flow. However, React has an internal mechanism for props validation
          called PropTypes. In this article, we’ll learn how to validate props
          with React PropTypes.
        </p>

        <h3 className="fw-bold my-3">
          3. Tell us the difference between nodejs and express js.
        </h3>
        <p className="my-2">
          <span className="fw-bold">Node.js: </span>Node.js is a free,
          cross-platform runtime environment and library for running web
          applications outside the client’s browser. Although it was first
          created with real-time, push-based architectures in mind, it is
          utilized for server-side programming and is generally deployed for
          non-blocking, event-driven servers, such as conventional web pages and
          backend API services. Every browser has a unique JavaScript engine,
          and node.js is based on the V8 JavaScript engine found in Google
          Chrome. One of the most often used technologies for backend
          programming is node.js. Through a popular example, large corporations
          like Uber, Netflix, and eBay encourage using Node.js. PayPal’s
          director of engineering, Jeff Harrell, made a statement regarding
          Node.js. “Node.js powers our web applications and has helped our teams
          to work significantly faster in bringing their designs to life,” he
          claimed. <br /> <br />
          <span className="fw-bold">Express js: </span>
          One of the best Node.js web application frameworks is Express.js. It
          is extremely lightweight and adaptable and has powerful features for
          the creation of websites and mobile applications. Without hiding
          Node.js functionalities, the Express.js framework offers a layer of
          basic web application features. On Express.js, many well-known
          frameworks are built. Express is a straightforward, extensible, and
          open-source Node.js web application framework designed to make
          building websites, web applications, and APIs much easier. Express is
          ranked fourth among the top 5 backend frameworks for 2021, according
          to a survey by Statistics & Data.
        </p>
        <h3 className="fw-bold my-3">
          4. What is a custom hook and why will you create a custom hook?
        </h3>
        <p className="my-2">
          <span className="fw-bold">Custom Hook: </span>Custom hooks are
          functions that start with the word use and can call other hooks inside
          them. Custom hooks allow you to extract and reuse common stateful
          logic across different components, without duplicating code or
          creating complex dependencies. For example, you can create a custom
          hook to fetch data from an API, store it in a state variable, and
          handle loading and error states.
          <br /> <br />
          <span className="fw-bold">Usage: </span>
          Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code. It also enhances the rendering
          speed of the code as a custom hook does not need to be rendered again
          and again while rendering the whole code.
        </p>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Blogs;
