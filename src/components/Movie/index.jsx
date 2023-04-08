import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { movies } from "./../../movie-database";

const Movie = () => {
  const { id } = useParams();
  const movieData = movies.find((movie) => movie.id === Number(id));

  return (
    <div>
      <h1>
        {movieData.title} <span>({movieData.year})</span>
      </h1>
      <div className="movie-container">
        <div className="movie-preview">
          <img src={movieData.poster} />
        </div>

        <div className="movie-detail">
          <p>
            <span className="movie-detail-info">Gendre:</span> {movieData.genre}
          </p>
          <p>
            <span className="movie-detail-info">Director: </span>
            {movieData.director}
          </p>
          <p>
            <span className="movie-detail-info">Cast:</span>
          </p>
          <ul className="cast-list">
            {movieData.cast.map((cast) => {
              return (
                <>
                  <li>
                    {cast.name} <span className="as">as</span> {cast.as}
                  </li>
                </>
              );
            })}
          </ul>

          <div className="storyline">
            <p className="movie-detail-info">Storyline</p>
            <p className="storyline-text">{movieData.storyline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
