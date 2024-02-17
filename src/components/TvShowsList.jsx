import { useEffect } from "react";

import Card from "./Card";
import styles from "./MovieList.module.css";
import Spinner from "./Spinner";
import { useTvShows } from "../contexts/TvShowsContext";

function TvShowsList() {
  const { tvShows, isLoading, getPopularTvShows } = useTvShows();
  // console.log(movies);

  useEffect(() => {
    getPopularTvShows();
    console.log("Hello");
  }, [getPopularTvShows]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.moviesContainer}>
      {tvShows.map((tvShow) => (
        <Card key={tvShow.id} media={tvShow} />
      ))}
    </div>
  );
}

export default TvShowsList;
