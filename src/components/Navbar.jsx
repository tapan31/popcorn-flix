import { NavLink } from "react-router-dom";
import { useState } from "react";

import Logo from "./Logo";
import styles from "./Navbar.module.css";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar />
      <nav>
        <ul>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/tv">Tv Shows</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
