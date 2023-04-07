import error404 from "../images/404.png";
import About from "./ui/about";

const NoPage = () => {
  return (
    <div id="error">
      <h1> ERROR! </h1>
      <img src={error404} alt="404 PAGE NOT FOUND" />
      <h2> Available pages: </h2>
      <ul>
        <li> /welcome </li>
        <li> /posts </li>
        <li> /posts/&#123;post.id&#125; </li>
        <li> /comments </li>
        <li> /comments/&#123;comment.id&#125; </li>
        <li> /photos</li>
        <li> /photos/&#123;photo.id&#125; </li>
        <li> /users </li>
        <li> /users/&#123;user.id&#125; </li>
      </ul>
      <About />
    </div>
  );
};

export default NoPage;