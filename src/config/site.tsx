import { Presentation, BookImage, ListTodo, Users } from 'lucide-react';
import { type ReactElement } from 'react';

import logo from '#/images/logo.webp';

interface LinkProps {
  to: string;
  icon: ReactElement;
}

export const LINKS: LinkProps[] = [
  {
    to: '/',
    icon: <img width='24' height='24' src={logo} alt='Green & Red Chat Boxes' />
  },
  {
    to: '/posts',
    icon: <Presentation size={24} aria-label='Presentation Slide' />
  },
  {
    to: '/albums',
    icon: <BookImage size={24} aria-label='Album' />
  },
  {
    to: '/todos',
    icon: <ListTodo size={24} aria-label='Todo List' />
  },
  {
    to: '/users',
    icon: <Users size={24} aria-label='Two Users' />
  }
];
