export const Navbar = () => {
  return (
    <nav>
      <span id='title'>
        <a href='/fake-api-forum/welcome'>Fake API Forum</a>
      </span>
      <span id='links'>
        <a href='/fake-api-forum/posts'> Posts </a>
        <a href='/fake-api-forum/comments'> Comments </a>
        <a href='/fake-api-forum/photos'> Photos </a>
        <a href='/fake-api-forum/users'> Users </a>
        <a href='#about'> About </a>
      </span>

      <div id='dropdown'>
        <button />
        <span id='drop-links'>
          <a href='/fake-api-forum/posts'> Posts </a>
          <a href='/fake-api-forum/comments'> Comments </a>
          <a href='/fake-api-forum/photos'> Photos </a>
          <a href='/fake-api-forum/users'> Users </a>
          <a href='#about'> About </a>
        </span>
      </div>
    </nav>
  );
};
