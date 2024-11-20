import { useContext } from 'react';

import { ThemeContext, type ThemeProps } from '@/state/Theme.tsx';

export const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error();

  return context;
};
