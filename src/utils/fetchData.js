import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Loading from "../components/Loading/Loading";

const DataContext = createContext([]);

const FetchData = ({children, endpoint}) => {
  const [dataNih, setDataNih] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${endpoint}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setDataNih(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endpoint]);

  if (!dataNih) {
    return <Loading/>;
  }

  return (
    <DataContext.Provider value={dataNih}>
      {children}
    </DataContext.Provider>
  );
};

export default FetchData;
export { DataContext };
