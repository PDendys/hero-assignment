export const API_ID_KEYS = {
  getStopwatches: 'getStopwatches',
  getSingleStopwatch: 'getSingleStopwatch',
  createStopwatch: 'createStopwatch',
  deleteStopwatch: 'deleteStopwatch',
  resetStopwatch: 'resetStopwatch',
  toggleStopwatch: 'toggleStopwatch',
};

export const API_URLS = {
  [API_ID_KEYS.getStopwatches]: '/stopwatches',
  [API_ID_KEYS.getSingleStopwatch]: '/stopwatches/:id',
  [API_ID_KEYS.createStopwatch]: '/stopwatches',
  [API_ID_KEYS.deleteStopwatch]: '/stopwatches/:id',
  [API_ID_KEYS.resetStopwatch]: '/stopwatches/:id',
  [API_ID_KEYS.toggleStopwatch]: '/stopwatches/:id/toggle',
};
