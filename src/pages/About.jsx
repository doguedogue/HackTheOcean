import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam
        ducimus eligendi iste sunt? Iste provident quisquam voluptatem, possimus
        excepturi minima quis nemo culpa aut impedit eveniet. Nemo, eum neque!
      </p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/Contact">Contact</Link>
      </nav>
    </div>
  );
};

export default About;
