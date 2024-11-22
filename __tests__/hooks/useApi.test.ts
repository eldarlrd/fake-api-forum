import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';
import { createElement, type ReactElement } from 'react';
import { type Mock, vi } from 'vitest';
import { z, ZodError } from 'zod';

import { service } from '@/config/service.ts';
import { useApi } from '@/hooks/useApi.ts';

const testSchema = z.object({
  name: z.string(),
  age: z.number()
});

describe('useApi hook', () => {
  vi.mock('@/config/service.ts', () => ({
    service: {
      get: vi.fn()
    }
  }));

  const createTestQueryClient = (): QueryClient =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: 5 * 60 * 1000,
          gcTime: 30 * 60 * 1000,
          refetchOnWindowFocus: false
        }
      }
    });

  const wrapper = ({ children }: { children: ReactElement }): ReactElement =>
    createElement(
      QueryClientProvider,
      { client: createTestQueryClient() },
      children
    );

  it('returns data from the API', async () => {
    const mockData = { name: 'John Doe', age: 21 };

    (service.get as Mock).mockResolvedValueOnce({ data: mockData });

    const { result, waitFor } = renderHook(() => useApi('test', testSchema), {
      wrapper
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toStrictEqual(mockData);
  });

  it('handles generic errors', async () => {
    const mockError = new Error('Network Error');

    (service.get as Mock).mockRejectedValueOnce(mockError);

    const { result, waitFor } = renderHook(() => useApi('test', testSchema), {
      wrapper
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toStrictEqual(mockError);
    expect(result.current.error).toBeInstanceOf(Error);
  });

  it('handles validation errors', async () => {
    const invalidData = { name: 'John Doe', age: '21' };

    (service.get as Mock).mockResolvedValueOnce({ data: invalidData });

    const { result, waitFor } = renderHook(() => useApi('test', testSchema), {
      wrapper
    });

    await waitFor(() => result.current.isError);
    expect(result.current.error).toBeInstanceOf(ZodError);
  });
});
