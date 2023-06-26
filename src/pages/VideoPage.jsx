import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState, useEffect } from "react";
import FetchData, { DataContext } from "../utils/fetchData";
import { Player } from "video-react";
import "/node_modules/video-react/dist/video-react.css";

const Video = () => {
  const dataVideo = useContext(DataContext);
  const [video, setVideo] = useState();

  useEffect(() => {
    if (Object.keys(dataVideo).length > 0) {
      setVideo(dataVideo.backdrop_path);
    }
  }, [dataVideo]);
  
  return (
    <div className="video-page">
      <Navbar />
      <div className="video-wrapper">
        <video width="100%" height="100%" controls poster={`${process.env.REACT_APP_POSTER_PATH}/${video}`}>
        </video>
      </div>
    </div>
  );
};

const VideoPage = () => {
  const { id } = useParams();

  return (
    <div className="wrapper">
      <FetchData endpoint={`/movie/${id}`}>
        <Video />
      </FetchData>
    </div>
  );
};

export default VideoPage;
