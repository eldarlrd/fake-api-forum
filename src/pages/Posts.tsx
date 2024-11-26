import { ChevronRight, CircleUserRound, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import '@/styles/pages/Posts.scss';

import { Loader } from '@/components/Loader.tsx';
import { type SchemaProps, SCHEMAS } from '@/config/schemas.ts';
import { Header } from '@/features/banners/Header.tsx';
import { useApi } from '@/hooks/useApi.ts';
import { capitalizeFirstLetter } from '@/utils/tools.ts';

const PostCard = ({
  post,
  pathname
}: {
  post: SchemaProps['posts'][number];
  pathname: string;
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const commentsRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  const { data = [] } = useApi(
    `${pathname}/${post.id.toString()}/comments`,
    SCHEMAS.comments
  );

  const toggleComments = (): void => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (commentsRef.current) {
      if (isOpen) {
        const scrollHeight = commentsRef.current.scrollHeight;

        setHeight(`${scrollHeight.toString()}px`);
      } else setHeight('0px');
    }
  }, [isOpen]);

  return (
    <figure className='post-card'>
      <h2>{capitalizeFirstLetter(post.title)}</h2>

      <p>{capitalizeFirstLetter(post.body)}</p>

      <button type='button' className='nested' onClick={toggleComments}>
        <MessageSquare size={20} aria-label='Chat Box' />
        Comments{' '}
        <ChevronRight
          className={`chevron ${isOpen ? 'down' : ''}`}
          size={20}
          aria-label='Chevron'
        />
      </button>

      <section ref={commentsRef} style={{ height }}>
        <ul>
          {data.map(comment => (
            <li key={comment.id}>
              <CircleUserRound size={16} aria-label='User' />{' '}
              <h3>{comment.email.toLowerCase()}</h3>
              <p>{capitalizeFirstLetter(comment.body)}</p>
            </li>
          ))}
        </ul>
      </section>
    </figure>
  );
};

export const Posts = (): ReactElement => {
  const { pathname } = useLocation();
  const { data = [], isLoading } = useApi(pathname, SCHEMAS.posts);

  if (isLoading) return <Loader />;

  return (
    <main id='posts'>
      <Header pathname={pathname} />
      {data.map(post => (
        <PostCard key={post.id} post={post} pathname={pathname} />
      ))}
    </main>
  );
};
