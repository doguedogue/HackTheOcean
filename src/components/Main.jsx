import FishBg from "../assets/FishBg.mp4";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={FishBg} autoPlay loop muted />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/HackTheOcean/" element={<Home />} />
            <Route path="/HackTheOcean/about" element={<About />} />
            <Route path="/HackTheOcean/contact" element={<Contact />} />

            <Route path="HackTheOcean/*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Main;
