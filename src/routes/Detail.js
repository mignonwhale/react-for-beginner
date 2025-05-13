import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const movie = await (
      await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
    ).data.movie;
    setMovie(movie);
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
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description_full}</p>
          <p>{movie.language}</p>
          <p>{movie.year}</p>
          <p>{movie.rating}</p>
          <p>{movie.runtime}</p>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
