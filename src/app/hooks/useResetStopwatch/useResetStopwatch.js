import { useMutation } from '@tanstack/react-query';
import { callAPI, handleError, makeUrl } from '@/utils';
import { API_URLS, HTTP_METHODS } from '@/constants';
import { useToggleStopwatch } from "@/hooks/useToggleStopwatch";

const resetMutation = async ({ id, started }) => {
  const { data } = await callAPI(makeUrl(API_URLS.resetStopwatch, id), HTTP_METHODS.POST, { started });
  return data;
}

export const useResetStopwatch = () => {
  const { mutateAsync, isLoading, error } = useMutation({
    mutationFn: resetMutation,
    onError: handleError
  });

  const resetStopwatch = async (id, time = null) => {
    const currentTimeStamp = Date.now();
    return await mutateAsync({ id, started: time || currentTimeStamp });
  }

  return {
    resetStopwatch,
    isResetStopwatchLoading: isLoading,
    resetStopwatchError: error
  };
};