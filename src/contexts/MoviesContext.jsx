import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";

const API_KEY = `f3fed79250ed0b8d28beced788741f42`;
const BASE_URL = "https://api.themoviedb.org/3";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getPopularMovies = useCallback(async function getPopularMovies() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function getTrendingMovies() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
      );
      const data = await res.json();
      console.log(data.results);
      setTrendingMovies(
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

  async function getNowPlayingMovies() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
      );
      const data = await res.json();
      console.log(data.results);
      setNowPlayingMovies(
        data.results.sort((a, b) => b.vote_average - a.vote_average)
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getMovieDetails(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  /* useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await res.json();
        // console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []); */

  return (
    <MoviesContext.Provider
      value={{
        movies,
        trendingMovies,
        nowPlayingMovies,
        isLoading,
        movie,
        getPopularMovies,
        getTrendingMovies,
        getNowPlayingMovies,
        getMovieDetails,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MoviesContext);
  return context;
}

export { MoviesProvider, useMovies };
