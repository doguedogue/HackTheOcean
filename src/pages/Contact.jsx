import Navbar from "../components/navbar";

const Contact = () => {
  return (
    <div className="content text-bg">
      <Navbar />
      <br />
      <h5>Developers</h5>
      <ul>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/101657514?v=4"
            class="circle"
            alt="@lukitachan"
            size="48"
            height="48"
            width="48"
          />
          &nbsp; Lucy &nbsp;
          <a
            href="https://github.com/lukitachan"
            target="_blank"
            rel="noreferrer"
          >
            @lukitachan
          </a>
        </li>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/99354481?v=4"
            class="circle"
            alt="@chistoperez"
            size="48"
            height="48"
            width="48"
          />
          &nbsp; Christopher &nbsp;
          <a
            href="https://github.com/chistoperez"
            target="_blank"
            rel="noreferrer"
          >
            @chistoperez
          </a>
        </li>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/72330887?v=4"
            class="circle"
            alt="@dfredude"
            size="48"
            height="48"
            width="48"
          />
          &nbsp; Alfred &nbsp;
          <a
            href="https://github.com/dfredude"
            target="_blank"
            rel="noreferrer"
          >
            @dfredude
          </a>
        </li>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/23409026?s=96&amp;v=4"
            class="circle"
            alt="@doguedogue"
            size="48"
            height="48"
            width="48"
          />
          &nbsp;Rafael &nbsp;
          <a
            href="https://github.com/doguedogue"
            target="_blank"
            rel="noreferrer"
          >
            @doguedogue
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
