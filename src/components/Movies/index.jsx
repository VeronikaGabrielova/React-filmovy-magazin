import React from "react";
import "./style.css";
import { Outlet } from "react-router-dom";
import MovieList from "../MovieList";

const Movies = () => {
  return (
    <div className="movies-container">
      <MovieList />
      <Outlet />
    </div>
  );
};

export default Movies;
