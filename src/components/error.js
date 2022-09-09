// Boilerplate
const errorURL = "https://www.mytownmyfuture.co.uk/wp-content/uploads/2017/08/404.png";
// Render
const NoPage = () => {
  return (
    <>
    <h1>ERROR!</h1>
    <img
      id="error-image"
      src={errorURL}
      alt="404 PAGE NOT FOUND"
    />
    <h3>Available pages:</h3>
    <ul id="error-list">
      <li>/welcome</li>
      <li>/posts</li>
      <li>/posts/&#123;post.id&#125;</li>
      <li>/comments</li>
      <li>/comments/&#123;comment.id&#125;</li>
      <li>/photos</li>
      <li>/photos/&#123;photo.id&#125;</li>
      <li>/users</li>
      <li>/users/&#123;user.id&#125;</li>
    </ul>
    </>
  );
};

export default NoPage;