import { ChevronRight, Images } from 'lucide-react';
import { type ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@/styles/pages/Albums.scss';

import { Loader } from '@/components/Loader.tsx';
import { type SchemaProps, SCHEMAS } from '@/config/schemas.ts';
import { Header } from '@/features/banners/Header.tsx';
import { useApi } from '@/hooks/useApi.ts';

const AlbumCard = ({
  album
}: {
  album: SchemaProps['albums'][number];
}): ReactElement => (
  <figure className='album-card'>
    <h2>
      <Images size={22} aria-label='Two Images' />
      {album.title}
    </h2>

    <Link to={`/albums/${album.id.toString()}/photos`} className='nested'>
      Show <ChevronRight size={20} aria-label='Chevron Right' />
    </Link>
  </figure>
);

export const Albums = (): ReactElement => {
  const { pathname } = useLocation();
  const { data = [], isLoading } = useApi(pathname, SCHEMAS.albums);

  if (isLoading) return <Loader />;

  return (
    <main id='albums'>
      <Header pathname={pathname} />
      {data.map(album => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </main>
  );
};
