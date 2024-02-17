import { Link } from "react-router-dom";
import styles from "./NowPlayingCard.module.css";

function NowPlayingCard({ media }) {
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

export default NowPlayingCard;
