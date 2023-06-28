import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPreview from "./pages/PreviewPage";
import VideoPage from "./pages/VideoPage";
import AllPage from "./pages/AllPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>          
          <Route exact path="/" Component={HomePage} />
          <Route path="/video/:id" Component={VideoPreview}/>
          <Route path="/video/:id/play" Component={VideoPage}/>
          <Route path="/all/:category" Component={AllPage}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
