import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import MovieDetails from "./pages/MovieDetails";
import TvShowDetails from "./pages/TvShowDetails";
import SearchDetails from "./pages/SearchDetails";

// contexts
import { TvShowsProvider } from "./contexts/TvShowsContext";
import { MoviesProvider } from "./contexts/MoviesContext";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <SearchProvider>
          <TvShowsProvider>
            <MoviesProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:id" element={<MovieDetails />} />
                <Route path="tv" element={<TvShows />} />
                <Route path="tv/:id" element={<TvShowDetails />} />
                <Route path="search" element={<Search />} />
                <Route path="search/:id" element={<SearchDetails />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </MoviesProvider>
          </TvShowsProvider>
        </SearchProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
