export const baseURL = "http://localhost:3000/api";
export const RESPONSE_THRESHOLD = 5000;

export const RESPONSE_ERROR_MESSAGES = {
  cancel: {
    dueNewRequest: 'Previous request cancelled due to a new request.',
    dueSlowRequest: 'Request has taken longer than expected. Please try again later.',
  }
}