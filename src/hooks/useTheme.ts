import { useContext } from 'react';

import { ThemeContext, type ThemeProps } from '@/utils/theme.ts';

export const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error();

  return context;
};
