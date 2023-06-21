import React, { useState } from "react";
import { Link } from "react-router-dom";

const Corousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 7 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 7 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <button className="left-button-carousel" onClick={handlePrevSlide}>&lt;</button>
      <div className="poster-container">
        {data
          .slice(currentSlide, currentSlide + 7)
          .map((item, index) => (
            <div className="poster-item" key={index}>
              <Link to={`/movie/${item.id}`}>
                <img src={`${process.env.REACT_APP_POSTER_PATH}${item.poster_path}`} alt={`Poster ${index}`} />
              </Link>
            </div>
          ))}
      </div>
      <button className="right-button-carousel" onClick={handleNextSlide}>&gt;</button>
    </div>
  );
};

export default Corousel;
