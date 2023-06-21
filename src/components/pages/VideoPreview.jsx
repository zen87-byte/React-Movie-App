import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        const filteredMovie = res.data.results.find((movie) => movie.id === parseInt(id));
        setMovie(filteredMovie);
        console.log(filteredMovie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`${process.env.REACT_APP_POSTER_PATH}${movie.backdrop_path}`} alt={movie.title} />
      {/* Tambahkan informasi detail lainnya yang ingin ditampilkan */}
    </div>
  );
};

export default MovieDetailPage;
