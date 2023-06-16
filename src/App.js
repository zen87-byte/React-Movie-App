import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [] = useState([]);
  useEffect(()=>{
      axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular`,{
        params:{
          api_key: process.env.REACT_APP_API_KEY
        }
      }).then((res) =>{
        console.log(res);
      })
  }, [])

  return (
    <div>
      <h1>Movie App</h1>
    </div>
  );
};

export default App;
