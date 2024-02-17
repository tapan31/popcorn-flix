import { useEffect } from "react";
import { useMovies } from "../contexts/MoviesContext";

import Card from "./Card";
import styles from "./TrendingMovies.module.css";
import Spinner from "./Spinner";

function TrendingMovies() {
  const { trendingMovies, isLoading, getTrendingMovies } = useMovies();
  // console.log(movies);

  useEffect(() => {
    getTrendingMovies();
    console.log("Hello");
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.container}>
      <h2>Trending Movies</h2>
      <div className={styles.moviesContainer}>
        {trendingMovies.map((movie) => (
          <Card key={movie.id} media={movie} />
        ))}
      </div>
    </div>
  );
}

export default TrendingMovies;
