import { useInfiniteQuery } from '@tanstack/react-query';
import { API_ID_KEYS, API_URLS } from '@/constants';
import { callAPI, handleError } from '@/utils';

const fetchStopwatches = async ({ pageParam = 0 }) => {
  return await callAPI(`${API_URLS.getStopwatches}?page=${pageParam}`);
}

export const useGetStopwatches = () => {
  const response = useInfiniteQuery(
    {
      queryKey: [API_ID_KEYS.getStopwatches],
      queryFn: fetchStopwatches,
      getNextPageParam: ({ data }) => {
        const { meta } = data;
        const { currentPage, totalPages } = meta;

        if (totalPages > currentPage) {
          return currentPage + 1;
        }

        return undefined;
      },
      refetchOnWindowFocus: false,
      onError: handleError
    });
  const {
    data: responseData,
    fetchNextPage,
    hasNextPage,
    error,
    isLoading,
  } = response || {};

  return { responseData, fetchNextPage, hasNextPage, error, isLoading };
}
