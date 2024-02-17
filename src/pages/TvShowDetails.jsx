import React, { useEffect } from "react";
import { useTvShows } from "../contexts/TvShowsContext";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./MovieDetails.module.css";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

/* 
Note - I had to do optional chaining of the map in this component because initially when the component first renders, tvShow is an empty object so all the properties are undefined, but when the useEffect hook calls the getTvShowDetails() then the movie state is updated and the component re-renders. 
So if I try to do .map on initial render it will give error.
*/

function TvShowDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTvShowDetails, tvShow, isLoading } = useTvShows();

  useEffect(() => {
    getTvShowDetails(id);
    console.log("TvShow Details");
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
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              alt=""
            />
          </div>
          <div className={styles.details}>
            <h2>{tvShow.name}</h2>
            <p>⭐ {Number(tvShow.vote_average).toFixed(1)}</p>
            <p className={styles.lead}>{tvShow.overview}</p>
            <p>
              <span>Release Date:</span> {tvShow.first_air_date}
            </p>
            <p>
              <span>Genres:</span>{" "}
              {tvShow.genres?.map((genre) => genre.name).join(", ")}
            </p>

            <p>
              <span>Number of Seasons:</span> {tvShow.number_of_seasons}
            </p>
            <p>
              <span>Number of Episodes:</span> {tvShow.number_of_episodes}
            </p>
            {tvShow.production_companies?.length > 0 && (
              <p>
                <span>Production:</span>{" "}
                {tvShow.production_companies
                  ?.map((company) => company.name)
                  .join(", ")}
              </p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default TvShowDetails;
