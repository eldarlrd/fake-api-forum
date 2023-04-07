import logo from "../../images/json.png";
import hamburger from "../../images/hamburger.png"

const Navbar = () => {
  return (
    <nav>
      <span id="title">
        <a href="/fake-api-forum/welcome">
          <img src={logo} alt="JSON Logo" /> Fake API Forum
        </a>
      </span>
      <span id="links">
        <a href="/fake-api-forum/posts"> Posts </a>
        <a href="/fake-api-forum/comments"> Comments </a>
        <a href="/fake-api-forum/photos"> Photos </a>
        <a href="/fake-api-forum/users"> Users </a>
        <a href="#about"> About </a>
      </span>

      <div id="dropdown">
        <button>
          <img src={hamburger} alt="Dropdown Toggle"/>
        </button>
        <span id="drop-links">
          <a href="/fake-api-forum/posts"> Posts </a>
          <a href="/fake-api-forum/comments"> Comments </a>
          <a href="/fake-api-forum/photos"> Photos </a>
          <a href="/fake-api-forum/users"> Users </a>
          <a href="#about"> About </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;