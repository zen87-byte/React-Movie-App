import Container from "./components/Container";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPreview from "./components/pages/VideoPreview";
import VideoPage from "./components/pages/VideoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>          
          <Route exact path="/" Component={HomePage} />
          <Route path="/movie/:id" Component={VideoPreview}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
