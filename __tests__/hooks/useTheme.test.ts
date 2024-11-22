import { useContext } from 'react';
import { type Mock, vi } from 'vitest';

import { useTheme } from '@/hooks/useTheme.ts';

vi.mock('react', async () => {
  const actual = await vi.importActual('react');

  return {
    ...actual,
    useContext: vi.fn(),
    createContext: vi.fn()
  };
});

describe('useTheme Hook', () => {
  it('returns the theme context', () => {
    const mockTheme = 'dark';
    const mockSetTheme = vi.fn();

    (useContext as Mock).mockReturnValue({
      theme: mockTheme,
      setTheme: mockSetTheme
    });

    const { theme, setTheme } = useTheme();

    expect(theme).toBe(mockTheme);
    expect(setTheme).toBe(mockSetTheme);
  });

  it('throws an error if context not provided', () => {
    (useContext as Mock).mockReturnValueOnce(null);

    expect(() => useTheme()).toThrowError();
  });
});
