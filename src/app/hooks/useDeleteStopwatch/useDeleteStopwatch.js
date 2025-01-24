import { useMutation } from '@tanstack/react-query';
import { API_URLS, HTTP_METHODS } from '@/constants';
import { callAPI, handleError, makeUrl } from '@/utils';

const deleteStopwatchMutation = async (id) => {
  await callAPI(makeUrl(API_URLS.deleteStopwatch, id), HTTP_METHODS.DELETE);
}

export const useDeleteStopwatch = () => {
  const { mutate } = useMutation({
    mutationFn: deleteStopwatchMutation,
    onError: handleError
  })

  const deleteStopwatch = async (id) => {
    await mutate(id);
  }

  return { deleteStopwatch };
}
