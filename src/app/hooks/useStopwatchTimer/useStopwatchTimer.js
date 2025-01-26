import { useState, useRef, useCallback, useEffect } from "react";
import { isStopwatchRunning, getRunningTime } from "@/utils";

export const useStopwatchTimer = ({ started = null, toggles = [] }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  }, []);

  const stop = useCallback(() => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setTime(0);
  }, []);

  const resStart = useCallback(() => {
    setTime(0);
    start();
  }, []);

  const toggle = useCallback(() => {
    if (isRunning) {
      stop();
      return;
    }

    start();
  }, [isRunning, start, stop]);

  useEffect(() => {
    const running = isStopwatchRunning(started, toggles);

    setIsRunning(running);
    setTime(getRunningTime(started, toggles));

    if (running) {
      start();
    } else {
      stop();
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [started, toggles]);

  return {
    time,
    isRunning,
    start,
    stop,
    reset,
    resStart,
    toggle,
    setTime
  };
}
