import { useEffect } from "react";
import { useMovies } from "../contexts/MoviesContext";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import TrendingMovies from "../components/TrendingMovies";
import TrendingTvShows from "../components/TrendingTvShows";
import Spinner from "../components/Spinner";
import NowPlaying from "../components/NowPlaying";

function Home() {
  return (
    <>
      <Navbar />
      <NowPlaying />
      <TrendingMovies />
      <TrendingTvShows />
    </>
  );
}

export default Home;
