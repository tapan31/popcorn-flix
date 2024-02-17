import { useEffect } from "react";
import { useMovies } from "../contexts/MoviesContext";

import Card from "./Card";
import styles from "./MovieList.module.css";
import Spinner from "./Spinner";

function MovieList() {
  const { movies, isLoading, getPopularMovies } = useMovies();
  // console.log(movies);

  useEffect(() => {
    getPopularMovies();
    console.log("Hello");
  }, [getPopularMovies]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.moviesContainer}>
      {movies.map((movie) => (
        <Card key={movie.id} media={movie} />
      ))}
    </div>
  );
}

export default MovieList;
