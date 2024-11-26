import {
  Building2,
  CircleUserRound,
  Globe,
  Mail,
  MapPinned,
  PackageOpen,
  Phone
} from 'lucide-react';
import { type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import '@/styles/pages/Users.scss';

import { Loader } from '@/components/Loader.tsx';
import { type SchemaProps, SCHEMAS } from '@/config/schemas.ts';
import { Header } from '@/features/banners/Header.tsx';
import { useApi } from '@/hooks/useApi.ts';
import { capitalizeFirstLetter } from '@/utils/tools.ts';

const UserCard = ({
  user
}: {
  user: SchemaProps['users'][number];
}): ReactElement => (
  <figure className='user-card'>
    <h2>
      <CircleUserRound size={22} aria-label='User' /> {user.name}{' '}
      <span>aka</span> {user.username.toLowerCase()}
    </h2>

    <p>
      <Mail size={20} aria-label='Mail' /> {user.email.toLowerCase()}
    </p>

    <p>
      <Phone size={20} aria-label='Phone' /> {user.phone}
    </p>

    <p>
      <Globe size={20} aria-label='Globe' /> {user.website}
    </p>

    <p>
      <MapPinned size={20} aria-label='Map Marker' /> {user.address.city},{' '}
      {user.address.street}, {user.address.suite}
    </p>

    <p>
      <PackageOpen size={20} aria-label='Opened Package' />{' '}
      {user.address.zipcode}
    </p>

    <p>
      <Building2 size={20} aria-label='Office Building' /> {user.company.name} —{' '}
      {capitalizeFirstLetter(user.company.bs)}
    </p>
  </figure>
);

export const Users = (): ReactElement => {
  const { pathname } = useLocation();

  const { data = [], isLoading } = useApi(pathname, SCHEMAS.users);

  if (isLoading) return <Loader />;

  return (
    <main id='users'>
      <Header pathname={pathname} />
      {data.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
};
