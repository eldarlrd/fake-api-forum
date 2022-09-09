// Boilerplate
const logoURL = "https://www.drupal.org/files/project-images/JSON_vector_logo.svg_.png";
const fCCFrontURL = "https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/";
const frontImageURL = "https://js.devexpress.com/Content/Images/features/html5-css-javascript-logos.png";
const fCCReactURL = "https://www.freecodecamp.org/news/react-beginner-handbook/";
const reactImageURL = "https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png";
// Render
const Welcome = () => {
  return (
    <>
    <h1 id="welcome-head">Welcome to the</h1>
    <h2 id="welcome-title">
      <img
        src={logoURL}
        alt="JSON Logo"
      />Fake API Forum
    </h2>

    <p id="welcome-text">
      The site imitates a forum archive by fetching fake API and displaying it in different categories.
      <br /><br />
      It is of particular interest since it's a <strong><em>single-page application</em></strong>,
      built using <strong>HTML/CSS</strong> &#38; <strong>JavaScript</strong> with its <strong>React.js</strong> library.
      <br /><br />
      Check out the <strong>Navigation Bar</strong> above for the available pages.
    </p>

    <a href={fCCFrontURL} target="_blank" rel="noreferrer">
      <img
        id="front-image"
        src={frontImageURL}
        alt="HTML/CSS/JS Logo"
      />
    </a>
    <a href={fCCReactURL} target="_blank" rel="noreferrer">
      <img
        id="react-image"
        src={reactImageURL}
        alt="React Logo"
      />
    </a>
    </>
  );
};

export default Welcome;