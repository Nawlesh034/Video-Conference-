
import { Routes, Route } from "react-router-dom";
import VideoRoom from './component/VideoRoom';
import Home from './component/Home';



function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomID" element={<VideoRoom />} />
    </Routes>
    </>
  )
}

export default App
