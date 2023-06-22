import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPreview from "./components/pages/VideoPreview";

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
