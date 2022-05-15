import FishBg from "../assets/FishBg.mp4";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Intro from "../pages/Intro";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay" />
      <video src={FishBg} autoPlay loop muted />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/HackTheOcean" element={<Navigate to="/" />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Main;
