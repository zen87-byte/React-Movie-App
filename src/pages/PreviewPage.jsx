import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import FetchData from "../utils/fetchData";
import { DataContext } from "../utils/fetchData";
import "../App.css";
import CommentSection from "../components/CommentSection";
import Container from "../components/Container";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [videoPreview, setvideoPreview] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setvideoPreview(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!videoPreview) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="wrapper-preview">
          <div className="video-preview">
            <div className="title-preview">
              {videoPreview.title}
              <div className="genre">
                {videoPreview.genres.map((genreItem) => (
                  <h3>{genreItem.name}</h3>
                ))}
              </div>
              <div className="detail-preview">
                <p className="rating">
                  <i class="fa fa-star" aria-hidden="true"></i>{" "}
                  {videoPreview.vote_average}
                </p>
                <p>{videoPreview.release_date}</p>
                <p>{videoPreview.original_language}</p>
              </div>
              <div className="sinopsis-preview">{videoPreview.overview}</div>
            </div>
            <Link to={`/video/${id}/play`}>
              <button className="button-preview">Watch Now</button>
            </Link>
          </div>
          <div className="backdrop-preview">
            <img
              src={`${process.env.REACT_APP_POSTER_PATH}${videoPreview.backdrop_path}`}
              alt=""
            />
            <div className="bottom"></div>
            <div className="right"></div>
          </div>
        </div>
          <Container category="Related" endpoint={`/movie/${id}/similar`}/>
        <div className="comment-section">
          <FetchData endpoint={`/movie/${id}/reviews`}>
            <CommentSection />
          </FetchData>
        </div>
      </div>
    </>
  );
};

export default MovieDetailPage;
