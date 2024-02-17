import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import Logo from "./Logo";
import styles from "./Navbar.module.css";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Logo />
      {!isMobile && <SearchBar />}
      <div
        className={styles.hamburger}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={isOpen ? styles.active : ""}>
        <ul>
          {isMobile && <SearchBar />}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
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
