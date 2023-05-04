import React from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";

const GoogleGitAuth = () => {
  return (
    <div className="mb-5 pb-5 d-flex justify-content-center flex-column">
      <Button className="mb-1" variant="outline-success">
        <FaGoogle className="text-warning fs-4 me-2"></FaGoogle>Login With
        Google
      </Button>
      <Button variant="outline-success">
        <FaGithub className="text-secondary fs-4 me-2"></FaGithub>Login With
        GitHub
      </Button>
    </div>
  );
};

export default GoogleGitAuth;
