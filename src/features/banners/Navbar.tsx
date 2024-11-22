import { Moon, Sun } from 'lucide-react';
import { type ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '@/styles/features/banners/Navbar.scss';
import { LINKS } from '@/config/site.tsx';
import { useTheme } from '@/hooks/useTheme.ts';

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
