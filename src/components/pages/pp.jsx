import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Container from "../Container";
import FetchData from "../../utils/fetch";
import { DataContext } from "../../utils/fetch";
import "../../App.css";

const MovieDetailPage = () => {
    const newData = useContext(DataContext);
    if (!newData) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        <Navbar />
        <div className="wrapper-preview">
          <div className="backdrop-preview">
            <img
              src={`${process.env.REACT_APP_POSTER_PATH}${newData.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="video-preview">
            <div className="title-preview">
                {newData.title}
              <div className="genre">
                <span>Action</span>
                <span>Horror</span>
                <span>Thriller</span>
              </div>
            </div>
            <div className="detail-preview">
              <p className="rating">{newData.vote_average}</p>
              <p>{newData.release_date}</p>
              <p>{newData.original_language}</p>
            </div>
            <div className="sinopsis-preview">{newData.overview}</div>
            <button className="button-preview">Watch Now</button>
          </div>
        </div>
        <Container category="Related"/>
      </div>
    );
  };

export default MovieDetailPage;