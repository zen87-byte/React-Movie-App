import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchData, { DataContext } from "../utils/fetchData";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const Card = () => {
  const data = useContext(DataContext);
  const [dataAll, setDataAll] = useState([]);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setDataAll(data.results);
    }
  }, [data]);

  return (
    <div className="all-poster">
      {dataAll.map((item, index) => (
        <div className="all-poster-item" key={index}>
          <Link to={`/video/${item.id}`}>
            <img src={`${process.env.REACT_APP_POSTER_PATH}${item.poster_path}`} alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
};

const AllPage = () => {
  const navigateBack = useNavigate();
  const { category } = useParams();

  const goBack = () =>{
    navigateBack(-1);
  }
  console.log("anjayy",category);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>{category.toUpperCase()}</h1>
        <button onClick={goBack}><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</button>
        <FetchData endpoint={`/movie/${category}`}>
          <Card />
        </FetchData>
      </div>
    </>
  );
};

export default AllPage;
