import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { movies } from "./../../movie-database";

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => {
        return (
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "" : "#083948",
              };
            }}
            className="movie-list a"
            key={movie.id}
            to={`/movies/${movie.id}`}
          >
            {movie.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default MovieList;
