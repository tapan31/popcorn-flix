import React, { useEffect } from "react";
import { useMovies } from "../contexts/MoviesContext";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./MovieDetails.module.css";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

/* 
Note - I had to do optional chaining of the map in this component because initially when the component first renders, movie is an empty object so all the properties are undefined, but when the useEffect hook calls the getMovieDetails() then the movie state is updated and the component re-renders. 
So if I try to do .map on initial render it will give error.
*/

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMovieDetails, movie, isLoading } = useMovies();

  useEffect(() => {
    getMovieDetails(id);
    console.log("Movie Details");
  }, [id]);

  if (isLoading) return <Spinner />;

  // console.log("Component renders");

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <BackButton onClick={() => navigate(-1)}>Back</BackButton>
        <main className={styles.main}>
          <div className={styles.imgContainer}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className={styles.details}>
            <h2>{movie.title}</h2>
            <p>⭐ {Number(movie.vote_average).toFixed(1)}</p>
            <p className={styles.lead}>{movie.overview}</p>
            <p>
              <span>Release Date:</span> {movie.release_date}
            </p>
            <p>
              <span>Genres:</span>{" "}
              {movie.genres?.map((genre) => genre.name).join(", ")}
            </p>

            <p>
              <span>Duration:</span>{" "}
              {movie.runtime == 0 ? "100" : movie.runtime} min
            </p>
            <p>
              <span>Production:</span>{" "}
              {movie.production_companies
                ?.map((company) => company.name)
                .join(", ")}
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default MovieDetails;
