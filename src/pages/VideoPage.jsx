import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import FetchData, { DataContext } from "../utils/fetchData";
import { Player } from "video-react";
import "/node_modules/video-react/dist/video-react.css";

const VideoPage = () => {
  const { id } = useParams();
  const dataVideo = useContext(DataContext);
  console.log(dataVideo);
  return (
    <div className="video-page">
      <Navbar />
      <FetchData endpoint={`/movie/${id}/videos`}>
        <div className="video-wrapper">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://youtu.be/wOJlkwupFDs"
          />
        </div>
      </FetchData>
    </div>
  );
};

export default VideoPage;
