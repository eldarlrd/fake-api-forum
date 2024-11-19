import '@/styles/features/Home.scss';
import { type ReactElement } from 'react';

export const Home = (): ReactElement => (
  <main id='home'>
    <h1>
      Welcome to the
      <div>
        <img
          src='favicon.png'
          width='32'
          height='32'
          alt='Green & Red Chat Boxes'
        />{' '}
        Fake API Forum
      </div>
    </h1>

    <h2>Demonstrating Consumption & Routing</h2>

    <p>
      The site imitates a forum archive by fetching an API and uses routing to
      display it across multiple pages.
    </p>

    <p>
      It is of particular interest since it's a{' '}
      <span>single-page application</span> built using{' '}
      <span className='ts'>TypeScript,</span>{' '}
      <span className='react'>React,</span> and{' '}
      <span className='scss'>SCSS.</span>
    </p>

    <p>
      Both the stack and the project are quite ordinary; this is essentially a
      step towards learning the fundamentals of working with a backend.
    </p>

    <h3 className='ts'>
      <a
        target='_blank'
        type='text/html'
        className='external'
        rel='external noreferrer'
        href='https://typescriptlang.org'>
        <i className='devicon-typescript-plain colored' /> TypeScript
      </a>
    </h3>

    <p>
      <span className='ts'>TypeScript</span> is a superset of{' '}
      <span className='js'>JavaScript</span> developed by Microsoft that adds
      static typing to the language. It's transpiled and ran on the browser.
    </p>

    <p>
      Type annotations make the code stronger, more predictable, and also act as
      convenient documentation.
    </p>

    <h3 className='react'>
      <a
        target='_blank'
        type='text/html'
        className='external'
        rel='external noreferrer'
        href='https://react.dev'>
        <i className='devicon-react-original colored' /> React
      </a>
    </h3>

    <p>
      <span className='react'>React</span> is a{' '}
      <span className='js'>JavaScript</span> library developed by Meta that
      allows building templated user interfaces using JSX syntax.
    </p>

    <p>
      It follows a component-based logic and thus allows for high reusability of
      code while also providing useful functions for state management and
      reactivity.
    </p>

    <h3 className='scss'>
      <a
        target='_blank'
        type='text/html'
        className='external'
        rel='external noreferrer'
        href='https://sass-lang.com'>
        <i className='devicon-sass-original colored' /> SCSS
      </a>
    </h3>

    <p>
      <span className='scss'>SCSS</span> is a <span className='css'>CSS</span>{' '}
      processor that extends design capabilities with convenient utility
      functions, as well as implementation of various quality of life features.
    </p>

    <p>
      It allows for less repetitive code by introducing modularity, which
      enables better scoping of styles per component.
    </p>
  </main>
);
