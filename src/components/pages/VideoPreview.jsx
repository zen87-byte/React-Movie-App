import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Container from "../Container";
import "../../App.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [videoPreview, setvideoPreview] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        const filteredMovie = res.data.results.find(
          (findVideo) => findVideo.id === parseInt(id)
        );
        setvideoPreview(filteredMovie);
        console.log(filteredMovie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!videoPreview) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <Navbar />
      <div className="wrapper-preview">
        <div className="backdrop-preview">
          <img
            src={`${process.env.REACT_APP_POSTER_PATH}${videoPreview.backdrop_path}`}
            alt=""
          />
        </div>
        <div className="video-preview">
          <div className="title-preview">
              {videoPreview.title}
            <div className="genre">
              <span>Action</span>
              <span>Horror</span>
              <span>Thriller</span>
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
      <Container category="Related"/>
    </div>
  );
};

export default MovieDetailPage;
