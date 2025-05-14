import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Rating from "./../components/Rating";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <img src={movie.large_cover_image} alt={movie.title} className={styles.img} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <span>{movie.title}</span>
              <span className={styles.year}> ({movie.year})</span>
            </div>
            <div className={styles.info}>
              <Rating rating={movie.rating} />
              <div className={styles.uploadedDate}>
                <span>{movie.date_uploaded.slice(0, 10)}</span>
                <span className={styles.genres}>{movie.genres.join(", ")}</span>
              </div>
              <p>{movie.runtime}min</p>
            </div>
            {movie.description_full !== "" ? (
              <div>
                <p className={styles.subTitle}>OverView</p>
                <p>{movie.description_full}</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
