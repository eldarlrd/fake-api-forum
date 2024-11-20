import { createContext, type ReactElement, useEffect, useState } from 'react';

interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeProps | null>(null);

const ThemeProvider = ({
  children
}: {
  children: ReactElement;
}): ReactElement => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const storedTheme = localStorage.getItem('theme');

  const initialTheme = storedTheme ?? (prefersDarkMode ? 'dark' : 'light');

  const [theme, setTheme] = useState<string>(initialTheme);

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove('light', 'dark');
    html.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { type ThemeProps, ThemeContext, ThemeProvider };
