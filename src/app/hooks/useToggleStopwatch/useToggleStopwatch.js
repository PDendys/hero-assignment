import { useMutation } from '@tanstack/react-query';
import { callAPI, handleError, makeUrl } from '@/utils';
import { API_URLS, HTTP_METHODS } from '@/constants';

const toggleStopwatchMutation = async ({ id, time }) => {
  const { data } = await callAPI(makeUrl(API_URLS.toggleStopwatch, id), HTTP_METHODS.POST, { time });
  return data;
}

export const useToggleStopwatch = () => {
  const { mutateAsync } = useMutation({
    mutationFn: toggleStopwatchMutation,
    onError: handleError
  });

  const toggleStopwatch = async (id, time = null) => {
    const currentTimeStamp = Date.now();
    return await mutateAsync({ id, time: time || currentTimeStamp });
  };

  return { toggleStopwatch };
}