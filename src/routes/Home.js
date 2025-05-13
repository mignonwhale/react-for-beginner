import { useState, useEffect } from "react";
import style from "./../App.module.css";
import Movie from "./../components/Movie";
function Home() {
  // 1. component
  // 2. route
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMoveis = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMoveis();
  }, []);

  return (
    <div>
      <h1 className={style.title}>Movie App</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
