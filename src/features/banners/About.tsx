const githubURL = 'https://github.com/eldarlrd';
const apiURL = 'https://jsonplaceholder.typicode.com/';

export const About = () => {
  return (
    <footer id='about'>
      Written by{' '}
      <a href={githubURL} target='_blank' rel='noreferrer'>
        eldarlrd.{' '}
      </a>
      <br />
      <br />
      This site uses a free fake API for demonstration purposes.
      <br />
      <br />
      <a href={apiURL} target='_blank' rel='noreferrer'>
        &#123;JSON&#125; Placeholder
      </a>
    </footer>
  );
};
