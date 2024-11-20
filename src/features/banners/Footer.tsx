import '@/styles/features/banners/Footer.scss';
import { Github } from 'lucide-react';
import { type ReactElement } from 'react';

export const Footer = (): ReactElement => (
  <footer>
    © 2022 - 2024{' '}
    <a
      title='Source'
      target='_blank'
      type='text/html'
      className='external'
      rel='external noreferrer author'
      href='https://github.com/eldarlrd/fake-api-forum'>
      {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
      <Github size={18} aria-label='GitHub Octocat' /> eldarlrd
    </a>
  </footer>
);
