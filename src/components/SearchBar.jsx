import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const sanitizedQuery = query.trim();
    if (!sanitizedQuery) return;
    navigate(`/search?query=${query}`);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search Movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
