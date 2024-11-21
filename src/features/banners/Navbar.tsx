import {
  Presentation,
  BookImage,
  ListTodo,
  Users,
  Moon,
  Sun
} from 'lucide-react';
import { type ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '@/styles/features/banners/Navbar.scss';
import logo from '#/images/logo.webp';
import { useTheme } from '@/hooks/useTheme.ts';

interface LinkProps {
  to: string;
  icon: ReactElement;
}

const LINKS: LinkProps[] = [
  {
    to: '/',
    icon: <img width='24' height='24' src={logo} alt='Green & Red Chat Boxes' />
  },
  {
    to: '/posts',
    icon: <Presentation size={24} aria-label='Presentation Slide' />
  },
  {
    to: '/albums',
    icon: <BookImage size={24} aria-label='Album' />
  },
  {
    to: '/todos',
    icon: <ListTodo size={24} aria-label='Todo List' />
  },
  {
    to: '/users',
    icon: <Users size={24} aria-label='Two Users' />
  }
];

export const Navbar = (): ReactElement => {
  const { theme, setTheme } = useTheme();
  const { pathname } = useLocation();

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav>
      <div>
        {LINKS.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`internal ${pathname === link.to ? 'current' : ''}`}>
            {link.icon}
          </Link>
        ))}
      </div>

      <button
        type='button'
        className='internal'
        onClick={toggleTheme}
        title={theme === 'dark' ? 'Toggle Light Theme' : 'Toggle Dark Theme'}>
        {theme === 'dark' ?
          <Sun size={24} aria-label='Sun' />
        : <Moon size={24} aria-label='Moon' />}
      </button>
    </nav>
  );
};
