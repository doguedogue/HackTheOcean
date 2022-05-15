import Navbar from "../components/navbar";
const Contact = () => {
  return (
    <div className="content">
      <Navbar />
      <br />
      <div className="homes text-info">
        <button type="button" className="btn btn-outline-info">
          <h2>Contact</h2>
        </button>
        <br />
        <h4>Developers</h4>
        <br />
        <ul className="Developers">
          <li>
            <a
              href="https://github.com/lukitachan"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://avatars.githubusercontent.com/u/101657514?v=4"
                class="circle"
                alt="@lukitachan"
              />
              &nbsp; Lucy &nbsp; @lukitachan
            </a>
          </li>
          <li>
            <a
              href="https://github.com/chistoperez"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://avatars.githubusercontent.com/u/99354481?v=4"
                class="circle"
                alt="@chistoperez"
              />
              &nbsp; Christopher &nbsp; @chistoperez
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dfredude"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://avatars.githubusercontent.com/u/72330887?v=4"
                class="circle"
                alt="@dfredude"
              />
              &nbsp; Alfred &nbsp; @dfredude
            </a>
          </li>
          <li>
            <a
              href="https://github.com/doguedogue"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://avatars.githubusercontent.com/u/23409026?s=96&amp;v=4"
                class="circle"
                alt="@doguedogue"
              />
              &nbsp;Rafael &nbsp; @doguedogue
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
