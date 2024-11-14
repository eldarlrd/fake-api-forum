import '@/styles/features/Home.scss';
import { type ReactElement } from 'react';

export const Home = (): ReactElement => (
  <main>
    <h1>Welcome to the Fake API Forum</h1>

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
        type='text/html'
        target='_blank'
        rel='external noreferrer'
        href='https://typescriptlang.org'>
        <i className='devicon-typescript-plain colored' /> TypeScript
      </a>
    </h3>

    <p>Lorem Ipsum</p>

    <h3 className='react'>
      <a
        type='text/html'
        target='_blank'
        rel='external noreferrer'
        href='https://react.dev'>
        <i className='devicon-react-original colored' /> React
      </a>
    </h3>

    <p>Lorem Ipsum</p>

    <h3 className='scss'>
      <a
        type='text/html'
        target='_blank'
        rel='external noreferrer'
        href='https://sass-lang.com'>
        <i className='devicon-sass-original colored' /> SCSS
      </a>
    </h3>

    <p>Lorem Ipsum</p>
  </main>
);
