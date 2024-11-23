import { Moon, Sun } from 'lucide-react';
import { useEffect, useState, type ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '@/styles/features/banners/Navbar.scss';
import { LINKS } from '@/config/site.tsx';
import { useTheme } from '@/hooks/useTheme.ts';

export const Navbar = (): ReactElement => {
  const { theme, setTheme } = useTheme();
  const { pathname } = useLocation();

  // Navbar Controls
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const currScrollPos = window.scrollY;
      const threshold = 80;
      const delay = 150;

      setIsHidden(currScrollPos > prevScrollPos && currScrollPos > threshold);

      setTimeout(() => {
        setPrevScrollPos(currScrollPos);
      }, delay);
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <section id='navbar'>
      <nav className={isHidden ? 'hidden' : ''}>
        <div>
          {LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={scrollToTop}
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
    </section>
  );
};
