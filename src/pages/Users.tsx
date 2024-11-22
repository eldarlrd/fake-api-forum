import { type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from '@/components/Loader.tsx';
import { SCHEMAS } from '@/config/schemas.ts';
import { useApi } from '@/hooks/useApi.ts';

export const Users = (): ReactElement => {
  const { pathname } = useLocation();
  const { data = [], isLoading } = useApi(pathname, SCHEMAS.users);

  if (isLoading) return <Loader />;

  return (
    <div>
      {data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
