export const isStopwatchRunning = (started, toggles) => {
  if (!started) {
    return false;
  }

  return toggles.length % 2 === 0;
}

export const getRunningTime = (started, toggles) => {
  if (!started) {
    return 0;
  }

  let totalRunningTime = 0;

  if (toggles.length === 0) {
    return Date.now() - started;
  }

  totalRunningTime += toggles[0] - started;

  for (let i = 1; i < toggles.length; i += 2) {
    const resumeTime = toggles[i];
    const pauseTime = toggles[i+1];

    if (pauseTime !== undefined) {
      totalRunningTime += pauseTime - resumeTime;
    } else {
      totalRunningTime += Date.now() - resumeTime;
    }
  }

  return totalRunningTime;
}

export const getFormattedTime = (timeInMilliseconds) => {
  const hours = Math.floor(timeInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((timeInMilliseconds - (hours * 1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeInMilliseconds - (hours * 1000 * 60 * 60) - (minutes * 1000 * 60)) / 1000);
  const milliseconds = timeInMilliseconds % 1000;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};