import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <main className="home">
        <nav class="navbar lighten-2-hover">
          <Link to="/home">
            <h1>Hack The Ocean</h1>
            <p>Launch X</p>
          </Link>
        </nav>
      </main>
    </>
  );
};

export default Intro;
