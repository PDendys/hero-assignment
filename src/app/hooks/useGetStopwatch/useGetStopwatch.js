import { useQuery } from '@tanstack/react-query';
import { API_ID_KEYS, API_URLS } from '@/constants';
import { callAPI, handleError, makeUrl } from '@/utils';

const fetchStopwatch = async (id) => {
  return await callAPI(makeUrl(API_URLS.getSingleStopwatch, id));
}

export const useGetStopwatch = (id) => {
  const response = useQuery(
    {
      queryKey: [API_ID_KEYS.getSingleStopwatch],
      queryFn: () => fetchStopwatch(id),
      enabled: !!id,
      refetchOnWindowFocus: false,
      retry: false,
      onError: handleError
    });
  const {
    data,
    error,
    isFetching,
    refetch,
  } = response || {};
  const stopwatch = data?.data?.result;

  return { stopwatch, error, isFetching, refetch };
}
