import { ClipboardList } from 'lucide-react';
import { type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import '@/styles/pages/Todos.scss';

import { Loader } from '@/components/Loader.tsx';
import { type SchemaProps, SCHEMAS } from '@/config/schemas.ts';
import { Header } from '@/features/banners/Header.tsx';
import { useApi } from '@/hooks/useApi.ts';

const TodoCard = ({
  todo
}: {
  todo: SchemaProps['todos'][number];
}): ReactElement => (
  <figure className={`todo-card ${todo.completed ? 'completed' : ''}`}>
    <h2>
      <ClipboardList size={22} aria-label='Todo' />
      {todo.title}
    </h2>
  </figure>
);

export const Todos = (): ReactElement => {
  const { pathname } = useLocation();
  const { data = [], isLoading } = useApi(pathname, SCHEMAS.todos);

  if (isLoading) return <Loader />;

  return (
    <main id='todos'>
      <Header pathname={pathname} />
      {data.map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </main>
  );
};
