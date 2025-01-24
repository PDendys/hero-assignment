import { useMutation } from '@tanstack/react-query';
import { callAPI, handleError, makeUrl } from '@/utils';
import { API_URLS, HTTP_METHODS } from '@/constants';

const resetMutation = async ({ id, started }) => {
  const { data } = await callAPI(makeUrl(API_URLS.resetStopwatch, id), HTTP_METHODS.POST, { started });
  return data;
}

export const useResetStopwatch = (successCallback) => {
  const { mutate } = useMutation({
    mutationFn: resetMutation,
    onError: handleError
  });

  const resetStopwatch = async (id, time = null) => {
    const currentTimeStamp = Date.now();
    await mutate({ id, started: time || currentTimeStamp });
  }

  return { resetStopwatch };
};