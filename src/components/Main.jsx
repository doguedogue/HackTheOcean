import FishBg from "../assets/FishBg.mp4";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={FishBg} autoPlay loop muted />
      <div className="content">
        <h1>Hack The Ocean</h1>
        <p>LaunchX</p>
      </div>
    </div>
  );
};

export default Main;
