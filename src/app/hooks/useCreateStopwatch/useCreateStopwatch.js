import { useMutation } from '@tanstack/react-query';
import { API_URLS, HTTP_METHODS } from '@/constants';
import { callAPI, handleError } from '@/utils';

const createMutation = async (started) => {
  const { data } = await callAPI(API_URLS.createStopwatch, HTTP_METHODS.POST, { started });
  return data;
}

export const useCreateStopwatch = () => {
  const { mutateAsync } = useMutation({
    mutationFn: createMutation,
    onError: handleError
  });

  const createStopwatch = async () => {
    const currentTimeStamp = Date.now();
    return await mutateAsync(currentTimeStamp);
  }

  return { createStopwatch };
}
