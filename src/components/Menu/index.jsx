import React from "react";
import "./style.css";

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "" : "#083948",
          };
        }}
        className="menu a"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "" : "#083948",
          };
        }}
        className="menu a"
        to="/reviews"
      >
        Reviews
      </NavLink>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "#f5deb3" : "#083948",
          };
        }}
        className="menu a"
        to="/articles"
      >
        Articles
      </NavLink>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "" : "#083948",
          };
        }}
        className="menu a"
        to="/movies"
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Menu;
