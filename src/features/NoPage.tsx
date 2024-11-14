export const NoPage = () => {
  return (
    <div id='error'>
      <h1> ERROR! </h1>
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
    </div>
  );
};
