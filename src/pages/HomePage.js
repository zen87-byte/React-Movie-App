import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import "../App.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Container category="Popular" endpoint="/movie/popular"/>
        <Container category="Upcoming" endpoint="/movie/upcoming"/>
        <Container category="Top Rated" endpoint="/movie/top_rated"/>
      </div>
    </>
  );
};

export default HomePage;
