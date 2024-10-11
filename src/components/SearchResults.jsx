import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";

import Spinner from "./Spinner";
import Card from "./Card";
import styles from "./MovieList.module.css";
import BackButton from "./BackButton";

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchResults, isLoading, getSearchResults } = useSearch();
  const navigate = useNavigate();
  const query = searchParams.get("query");
  // console.log(`Query: ${query}`);

  useEffect(() => {
    getSearchResults(query);
  }, [query]);

  if (isLoading) return <Spinner />;

  if (searchResults.length === 0)
    return (
      <h2 style={{ padding: "1rem" }}>
        No Results Found, Please check for any spelling mistakes
      </h2>
    );

  return (
    <div style={{ maxWidth: "90rem", margin: "auto" }}>
      <div style={{ padding: "0 3rem" }}>
        <BackButton onClick={() => navigate("/")}>Back To Home</BackButton>
      </div>
      <h2 style={{ padding: "1rem 3rem 0" }}>
        {searchResults.length} Results Found for "{query}"
      </h2>
      <div className={styles.moviesContainer}>
        {searchResults.map((media) => (
          <Card key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
