import axios, { CancelToken } from "axios";
import {
  baseURL,
  RESPONSE_ERROR_MESSAGES,
  HTTP_METHODS,
  RESPONSE_THRESHOLD
} from "@/constants";

let source;
let didTimeout = false;

const { signal } = new AbortController();

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const callAPI = async (
  url,
  method= HTTP_METHODS.GET,
  body= null
) => {
  try {
    if (source) {
      source.cancel(RESPONSE_ERROR_MESSAGES.cancel.dueNewRequest);
    }

    source = CancelToken.source();

    const timer = setTimeout(() => {
      didTimeout = true;
      source.cancel(RESPONSE_ERROR_MESSAGES.cancel.dueSlowRequest);
    }, RESPONSE_THRESHOLD);

    const options = {
      method,
      url,
      signal,
      body: body ? JSON.stringify(body) : null,
      cancelToken: source.token,
    };

    if (body) {
      options.data = body;
    }

    const { data } = await apiClient(options);

    clearTimeout(timer);
    source = null;

    return { data};

  } catch (error) {
    throw new Error(error);
  }
}

export const makeUrl = (url, id) => {
  return url.replace(':id', id);
}

export const handleError = (error) => {
  if (error.message === `CanceledError: ${RESPONSE_ERROR_MESSAGES.cancel.dueSlowRequest}`) {
    alert("Oops! We're currently experiencing some issues. Please wait a moment and try refreshing the page.")
  }
}