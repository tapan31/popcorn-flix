import { Link } from "react-router-dom";

import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <section className={styles.section}>
      <h1>Oops 🤔</h1>
      <p>Page Not Found</p>
      <Link to="/">Go Home</Link>
    </section>
  );
}

export default PageNotFound;
