import {
  type ReactElement,
  createContext,
  createElement,
  useEffect,
  useState
} from 'react';

interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeProps | null>(null);

const root: HTMLElement = document.documentElement;

const applyTheme = (theme: string): void => {
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.style.colorScheme = theme;
  localStorage.setItem('theme', theme);
};

// Avoid FOLM
const themeCheck = (): void => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const storedTheme = localStorage.getItem('theme');
  const theme = storedTheme ?? (prefersDarkMode ? 'dark' : 'light');

  applyTheme(theme);
};

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
    applyTheme(theme);
  }, [theme]);

  return createElement(
    ThemeContext.Provider,
    { value: { theme, setTheme } },
    children
  );
};

themeCheck();

export { type ThemeProps, ThemeContext, ThemeProvider };
