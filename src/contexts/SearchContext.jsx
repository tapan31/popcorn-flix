import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const API_KEY = `f3fed79250ed0b8d28beced788741f42`;
const BASE_URL = "https://api.themoviedb.org/3";

function SearchProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getSearchResults(query) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${BASE_URL}/search/multi?query=${query}&api_key=${API_KEY}`
      );
      const data = await res.json();
      // console.log(data);
      setSearchResults(
        data.results
          .filter(
            (res) => res.media_type !== "person" && res.poster_path !== null
          )
          .sort((a, b) => b.vote_average - a.vote_average)
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        isLoading,
        getSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  return context;
}

export { SearchProvider, useSearch };
