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