import React, { useState } from "react";
import { Link } from "react-router-dom";

const Corousel = ({ itemsToShow, data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevSlide}>&lt;</button>
      <div className="poster-container">
        {data
          .slice(currentSlide, currentSlide + itemsToShow)
          .map((item, index) => (
            <div className="poster-item" key={index}>
              <Link to={`/movie/${item.id}`}>
                <img src={`${process.env.REACT_APP_POSTER_PATH}${item.poster_path}`} alt={`Poster ${index}`} />
              </Link>
            </div>
          ))}
      </div>
      <button onClick={handleNextSlide}>&gt;</button>
    </div>
  );
};

export default Corousel;
