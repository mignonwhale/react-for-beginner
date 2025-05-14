import starImg from "./../assets/star-icon-file.png";
import styles from "./Rating.module.css";

function Rating({ rating }) {
  return (
    <div className={styles.rating}>
      <img src={starImg} alt="별 아이콘" width={24} height={24} />
      <span className={styles.rating_point}>{rating}</span>
    </div>
  );
}
export default Rating;
