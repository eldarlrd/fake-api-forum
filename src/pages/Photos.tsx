import { type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import '@/styles/pages/Photos.scss';

import { Loader } from '@/components/Loader.tsx';
import { type SchemaProps, SCHEMAS } from '@/config/schemas.ts';
import { Header } from '@/features/banners/Header.tsx';
import { useApi } from '@/hooks/useApi.ts';

const PhotoCard = ({
  photo
}: {
  photo: SchemaProps['photos'][number];
}): ReactElement => (
  <figure className='photo-card'>
    <img width='150' height='150' src={photo.thumbnailUrl} alt={photo.title} />
  </figure>
);

export const Photos = (): ReactElement => {
  const { pathname } = useLocation();
  const { data = [], isLoading } = useApi(pathname, SCHEMAS.photos);

  if (isLoading) return <Loader />;

  return (
    <main id='photos'>
      <Header pathname={pathname} nested />
      <section>
        {data.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </section>
    </main>
  );
};
