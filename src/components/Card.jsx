import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const movie = {
  id: 933131,
  posterPath: "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
  title: "Badland Hunters",
  releaseDate: "2024-01-26",
};

function Card({ media }) {
  // console.log(`Media ${media.id} posterpath: ${media.posterPath}`);
  return (
    <div className={styles.card}>
      <Link
        to={
          media.media_type === "movie" || media.title
            ? `/movies/${media.id}`
            : `/tv/${media.id}`
        }
      >
        <img
          src={
            media.posterPath !== null
              ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
              : "/no-image.jpg"
          }
          alt={media.title || media.name}
        />
      </Link>
      <div className={styles.cardContent}>
        {media.title !== undefined && (
          <h3>
            {media.title.length > 23
              ? media.title.substring(0, 23) + "..."
              : media.title}
          </h3>
        )}
        {media.name !== undefined && (
          <h3>
            {media.name.length > 23
              ? media.name.substring(0, 23) + "..."
              : media.name}
          </h3>
        )}
        {/* {media.release_date && <p>{media.release_date}</p>} */}
        {media.vote_average && <p>⭐ {media.vote_average.toFixed(1)}</p>}
      </div>
    </div>
  );
}

export default Card;
