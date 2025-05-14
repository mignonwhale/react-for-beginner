import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Movie.module.css";
import Rating from "./Rating";

function Movie({ coverImg, id, title, rating }) {
  return (
    <div className={styles.container}>
      <Link to={`/movie/${id}`} className={styles.link}>
        <img src={coverImg} alt={title} className={styles.img} />
        <p className={styles.titleBox}>{title}</p>
      </Link>
      {/* 링크가 안 먹음 -> router 문법이 버전 업으로 변경됨*/}
      <Rating rating={rating} />
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};
export default Movie;
