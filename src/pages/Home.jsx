import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <nav>
          <Link to="/about">
            <h1>Hack The Ocean</h1>
            <p>Launch X</p>
          </Link>
        </nav>
      </main>
    </>
  );
};

export default Home;
