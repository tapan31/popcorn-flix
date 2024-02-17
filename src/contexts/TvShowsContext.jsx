import { createContext, useContext, useState, useCallback } from "react";

const TvShowsContext = createContext();

const API_KEY = `f3fed79250ed0b8d28beced788741f42`;
const BASE_URL = "https://api.themoviedb.org/3";

function TvShowsProvider({ children }) {
  const [tvShows, setTvShows] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const [tvShow, setTvShow] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getPopularTvShows = useCallback(async function getPopularTvShows() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
      const data = await res.json();
      // console.log(data);
      setTvShows(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function getTrendingTvShows() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
      );
      const data = await res.json();
      console.log(data.results);
      setTrendingTvShows(
        data.results
          .sort((a, b) => b.vote_average - a.vote_average)
          .slice(0, 15)
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getTvShowDetails(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setTvShow(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TvShowsContext.Provider
      value={{
        tvShows,
        trendingTvShows,
        tvShow,
        isLoading,
        getPopularTvShows,
        getTrendingTvShows,
        getTvShowDetails,
      }}
    >
      {children}
    </TvShowsContext.Provider>
  );
}

function useTvShows() {
  const context = useContext(TvShowsContext);
  return context;
}

export { TvShowsProvider, useTvShows };
