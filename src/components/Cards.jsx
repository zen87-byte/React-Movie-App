import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Corousel';
import { useParams } from 'react-router-dom';

const Cards = () => {
  const [trending, setTrending] = useState([]);
  const {movieId} = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setTrending(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      <Carousel data={trending} />
    </>
  );
};

export default Cards;
