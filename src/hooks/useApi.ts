import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { ZodError, type ZodSchema } from 'zod';

import { service } from '@/config/service.ts';

const fetchData = async <T>(endpoint: string): Promise<T> => {
  const { data } = await service.get<T>(endpoint);

  return data;
};

export const useApi = <T>(
  endpoint: string,
  schema: ZodSchema<T>
): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [endpoint],
    queryFn: async () => {
      const data = await fetchData<T>(endpoint);

      try {
        return schema.parse(data);
      } catch (error: unknown) {
        if (error instanceof ZodError) {
          console.error(error.errors);
          throw new ZodError(error.errors);
        }
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false
  });
};
