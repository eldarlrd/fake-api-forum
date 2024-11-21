import { type ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@/App.scss';
import '@fontsource-variable/raleway/index.css';
import 'modern-normalize/modern-normalize.css';

import { Home } from '@/features/Home.tsx';
import { NoPage } from '@/features/NoPage.tsx';
import { Footer } from '@/features/banners/Footer.tsx';
import { Navbar } from '@/features/banners/Navbar.tsx';
import { Comments } from '@/pages/Comments.tsx';
import { Posts } from '@/pages/Posts.tsx';
import { Todos } from '@/pages/Todos.tsx';
import { Users } from '@/pages/Users.tsx';
import { ThemeProvider } from '@/utils/Theme.tsx';

interface RouteProps {
  path: string;
  element: ReactElement;
}

const ROUTES: RouteProps[] = [
  {
    path: '/',
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
    path: '/todos',
    element: <Todos />
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
    <ThemeProvider>
      <>
        <Navbar />

        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>

        <Footer />
      </>
    </ThemeProvider>
  );
};

// Easter Egg
console.log('Onboarding by K. M.');
