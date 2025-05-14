import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Movie from "./../components/Movie";
function Home() {
  // 1. component
  // 2. route
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMoveis = async () => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  const sortMovies = (sortBy) => {
    const sortedMovies = movies;
    return sortedMovies.slice().sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating; // 높은 rating이 먼저
      } else {
        return new Date(b.date_uploaded) - new Date(a.date_uploaded); // 최신 업로드가 먼저
      }
    });
  };

  const handleSoring = (event) => {
    const sortedMovies = sortMovies(event.target.value);
    console.log(sortedMovies);
    setMovies(sortedMovies);
  };

  useEffect(() => {
    getMoveis();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.container}>
          <div className={styles.sort}>
            <select onChange={handleSoring} className={styles.selector}>
              <option value="">sort by</option>
              <option value="rating">rating</option>
              <option value="date">uploadedDate</option>
            </select>
          </div>
          <div className={styles.movieGrid}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
