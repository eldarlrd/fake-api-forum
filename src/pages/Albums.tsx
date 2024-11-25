import { type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from '@/components/Loader.tsx';
import { SCHEMAS } from '@/config/schemas.ts';
import { Header } from '@/features/banners/Header.tsx';
import { useApi } from '@/hooks/useApi.ts';

export const Albums = (): ReactElement => {
  const { pathname } = useLocation();
  const { data = [], isLoading } = useApi(pathname, SCHEMAS.albums);

  if (isLoading) return <Loader />;

  console.log(data);

  return (
    <main id='albums'>
      <Header pathname={pathname} />
    </main>
  )
};
