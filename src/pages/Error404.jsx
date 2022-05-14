import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="home">
      <nav>
        <Link to="/home">
          <h3>Error 404</h3>
          <p>Not Found</p>
          <br />
          Click here to go back to Home
        </Link>
      </nav>
    </div>
  );
};

export default Error404;
