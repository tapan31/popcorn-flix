import { useEffect } from "react";
import { useTvShows } from "../contexts/TvShowsContext";

import Card from "./Card";
import styles from "./TrendingMovies.module.css";
import Spinner from "./Spinner";

function TrendingTvShows() {
  const { trendingTvShows, isLoading, getTrendingTvShows } = useTvShows();
  // console.log(movies);

  useEffect(() => {
    getTrendingTvShows();
    // console.log("Hello");
  }, []);

  return (
    <div className={styles.container}>
      <h2>Trending Tv Shows</h2>
      <div className={styles.moviesContainer}>
        {trendingTvShows.map((tvShow) => (
          <Card key={tvShow.id} media={tvShow} />
        ))}
      </div>
    </div>
  );
}

export default TrendingTvShows;
