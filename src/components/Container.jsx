import FetchData from "../utils/fetchData";
import "../App.css";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../utils/fetchData";

const Corousel = () => {
  const dataVideo = useContext(DataContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [datawoi, setDatawoi] = useState([]);

  useEffect(()=>{
    if(Object.keys(dataVideo).length > 0){
      setDatawoi(dataVideo.results)
    }
  }, [dataVideo]);

  const handleVisible = () =>{
    setIsVisible(true);
  }

  const handleHover = () =>{
    setIsHovered(true);
  }

  const handleNotHover = () =>{
    setIsHovered(false);
  }

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === dataVideo.length - 6 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? dataVideo.length - 6 : prevSlide - 1
    );
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleNotHover} className="carousel">
      <button className={`left-button-carousel ${isHovered? `hovered` : ""}`} onClick={handlePrevSlide}>&lt;</button>
      <div className={`poster-container ${isVisible? `visibleTrue` : ""}`}>
        {datawoi
          .slice(currentSlide, currentSlide + 6)
          .map((item, index) => (
            <div className="poster-item" key={index}>
              <Link to={`/video/${item.id}`}>
                <img onLoad={handleVisible} src={`${process.env.REACT_APP_POSTER_PATH}${item.poster_path}`} alt={`${item.title}`} />
              </Link>
            </div>
          ))}
      </div>
      <button className={`right-button-carousel ${isHovered? `hovered` : ""}`} onClick={handleNextSlide}>&gt;</button>
    </div>
  );
};

const Container = ({ category, endpoint}) =>{
    const [isHovered, setIsHovered] = useState(false);

    return(
        <>        
            <div className="container">
                <div className="top-container">
                    <h3>{category}</h3>
                    <Link to={`/all/${category.toLowerCase()}`}><p>View All <i class="fa fa-angle-right" aria-hidden="true"></i></p></Link>
                </div>
                <div className="item-container">
                    <FetchData endpoint={`${endpoint}`}>
                        <Corousel/>
                    </FetchData>
                </div>
            </div>            
        </>
    )
}

export default Container