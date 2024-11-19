import { lazy, type ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@/App.scss';
import '@fontsource-variable/raleway/index.css';
import 'modern-normalize/modern-normalize.css';

import { NoPage } from '@/features/NoPage.tsx';
import { Footer } from '@/features/banners/Footer.tsx';
import { Navbar } from '@/features/banners/Navbar';

const Home = lazy(() =>
  import('@/features/Home').then(module => ({ default: module.Home }))
);
const Posts = lazy(() =>
  import('@/pages/Posts').then(module => ({ default: module.Posts }))
);
const Comments = lazy(() =>
  import('@/pages/Comments').then(module => ({ default: module.Comments }))
);
const Photos = lazy(() =>
  import('@/pages/Photos').then(module => ({ default: module.Photos }))
);
const Users = lazy(() =>
  import('@/pages/Users').then(module => ({ default: module.Users }))
);

interface RouteProps {
  path: string;
  element: ReactElement;
}

const ROUTES: RouteProps[] = [
  {
    path: '',
    element: <Home />
  },
  {
    path: '/posts',
    element: <Posts />
  },
  {
    path: '/comments',
    element: <Comments />
  },
  {
    path: '/photos',
    element: <Photos />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '*',
    element: <NoPage />
  }
];

export const App = (): ReactElement => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>

      <Footer />
    </>
  );
};

// Easter Egg
console.log('Onboarding by K. M.');
