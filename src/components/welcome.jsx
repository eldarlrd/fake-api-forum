import logo from "../images/json.png";
import triplet from "../images/html-css-js.png";
import reactImg from "../images/react.png";
import About from "./ui/about";
const fCCFrontURL = "https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/";
const fCCReactURL = "https://www.freecodecamp.org/news/react-beginner-handbook/";

const Welcome = () => {
  return (
    <div id="welcome">
      <h1>
        Welcome to the
        <br />
        <img src={logo} alt="JSON Logo"/> Fake API Forum
      </h1>

      <p>
        The site imitates a forum archive by fetching fake API and displaying it in different categories.
        <br /><br />
        It is of particular interest since it's a <strong><em> single-page application, </em></strong>
        built using <strong> HTML/CSS </strong> &#38; <strong> JavaScript </strong> with its <strong> React.js </strong> library.
        <br /><br />
        Check out the <strong> Navigation Bar </strong> above for the available pages.
      </p>

      <div>
        <a href={fCCFrontURL} target="_blank" rel="noreferrer">
          <img
            id="img-triplet"
            src={triplet}
            alt="HTML/CSS/JS Logo"
          />
        </a>
        <a href={fCCReactURL} target="_blank" rel="noreferrer">
          <img
            id="img-react"
            src={reactImg}
            alt="React Logo"
          />
        </a>
      </div>
    <About />
    </div>
  );
};

export default Welcome;