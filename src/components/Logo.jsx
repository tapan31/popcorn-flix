import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <h1 className={styles.h1}>
      <Link to="/">Popcorn Flix</Link>
    </h1>
  );
}

export default Logo;
