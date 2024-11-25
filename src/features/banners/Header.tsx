import { ChevronLeft } from 'lucide-react';
import { type ReactElement } from 'react';
import '@/styles/features/banners/Header.scss';
import { Link } from 'react-router-dom';

import { NAV_LINKS, NESTED_LINKS } from '@/config/site.tsx';
import { getNestedPath, pathToTitle } from '@/utils/tools.ts';

export const Header = ({
  pathname,
  nested = false
}: {
  pathname: string;
  nested?: boolean;
}): ReactElement => {
  const title = nested ? getNestedPath(pathname) : pathToTitle(pathname);

  const link =
    nested ?
      NESTED_LINKS.find(link => link.to === title)
    : NAV_LINKS.find(link => link.to === pathname);

  const parent = '/' + pathname.split('/')[1];

  const icon = link ? link.icon : null;

  return (
    <header id='page-header'>
      {nested && (
        <Link to={parent} className='nested'>
          <ChevronLeft size={24} aria-label='Chevron Left' />
        </Link>
      )}{' '}
      <h1>
        {icon} {title}
      </h1>
    </header>
  );
};
