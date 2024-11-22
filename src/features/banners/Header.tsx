import { type ReactElement } from 'react';

import '@/styles/features/banners/Header.scss';
import { LINKS } from '@/config/site.tsx';
import { pathToTitle } from '@/utils/tools.ts';

export const Header = ({ pathname }: { pathname: string }): ReactElement => {
  const title = pathToTitle(pathname);

  const link = LINKS.find(link => link.to === pathname);

  const icon = link ? link.icon : null;

  return (
    <header>
      <h1>
        {icon} {title}
      </h1>
    </header>
  );
};
