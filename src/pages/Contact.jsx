import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>visita mi sitio web </p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Contact;
