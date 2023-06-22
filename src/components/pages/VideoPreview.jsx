import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Container from "../Container";
import FetchData from "../../utils/fetch";
import { DataContext } from "../../utils/fetch";
import "../../App.css";
import Corousel from "../Corousel";



const MovieDetailPage = () => {
  const { id } = useParams();
  const dataVideo = useContext(DataContext);
  const [videoPreview, setvideoPreview] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        // const filteredMovie = res.data.results.find(
        //   (findVideo) => findVideo.id === parseInt(id)
        // );
        setvideoPreview(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!videoPreview) {
    return <div>Loading...</div>;
  }
  console.log(videoPreview);
  return (
    <div>
      <Navbar />
      <div className="wrapper-preview">
        <div className="backdrop-preview">
            <img
              src={`${process.env.REACT_APP_POSTER_PATH}${videoPreview.backdrop_path}`}
              alt=""
            />
          <div className="bottom"></div>
          <div className="right"></div>
        </div>
        <div className="video-preview">
          <div className="title-preview">
              {videoPreview.title}
            <div className="genre">
              {videoPreview.genres.map((genreItem) =>(
                <h3>{genreItem.name}</h3>
              ))}
            </div>
          </div>
          <div className="detail-preview">
            <p className="rating">{videoPreview.vote_average}</p>
            <p>{videoPreview.release_date}</p>
            <p>{videoPreview.original_language}</p>
          </div>
          <div className="sinopsis-preview">{videoPreview.overview}</div>
          <button className="button-preview">Watch Now</button>
        </div>
      </div>
      <video src={videoPreview.video}></video>
      <Container/>
    </div>
  );
};

export default MovieDetailPage;
