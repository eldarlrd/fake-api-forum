import { type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from '@/components/Loader.tsx';
import { type SchemaProps, SCHEMAS } from '@/config/schemas.ts';
import { Header } from '@/features/banners/Header.tsx';
import { useApi } from '@/hooks/useApi.ts';

const UserCard = ({
  user
}: {
  user: SchemaProps['users'][number];
}): ReactElement => (
  <figure className='user-card'>
    <h3>{user.name}</h3>
    <p>
      <strong>Username:</strong> {user.username}
    </p>
    <p>
      <strong>Email:</strong> {user.email}
    </p>
    <p>
      <strong>Phone:</strong> {user.phone}
    </p>
    <p>
      <strong>Website:</strong> {user.website}
    </p>

    <div>
      <h4>Address:</h4>
      <p>
        <strong>Street:</strong> {user.address.street}
      </p>
      <p>
        <strong>Suite:</strong> {user.address.suite}
      </p>
      <p>
        <strong>City:</strong> {user.address.city}
      </p>
      <p>
        <strong>Zipcode:</strong> {user.address.zipcode}
      </p>
      <p>
        <strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}
      </p>
    </div>

    <div>
      <h4>Company:</h4>
      <p>
        <strong>Name:</strong> {user.company.name}
      </p>
      <p>
        <strong>Catchphrase:</strong> {user.company.catchPhrase}
      </p>
      <p>
        <strong>BS:</strong> {user.company.bs}
      </p>
    </div>
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
