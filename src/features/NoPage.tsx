import { ChevronLeft } from 'lucide-react';
import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import '@/styles/features/NoPage.scss';

export const NoPage = (): ReactElement => (
  <main id='no-page'>
    <header>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
    </header>

    <Link to='/'>
      <ChevronLeft size={28} aria-label='Chevron Left' /> Back
    </Link>
  </main>
);
