import React from "react";
import "./ActiveLink.css";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "active text-decoration-none text-secondary px-2 border-4 border-bottom border-success mx-3"
          : "text-decoration-none text-secondary mx-3"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
