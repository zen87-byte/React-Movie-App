import { useParams } from "react-router-dom"
import Navbar from "../Navbar";

const VideoPage = () =>{
    const {videoID} = useParams();
    return(
        <div className="video-page">
            <Navbar/>
            <div className="video-wrapper">
                <video src="" width="750" height="500" controls></video>
            </div>
        </div>
    )
}

export default VideoPage