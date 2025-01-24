import React from "react";
import { StopwatchTimerStyled } from "./styles";

const getFormattedTime = (timeInMilliseconds) => {
  const hours = Math.floor(timeInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((timeInMilliseconds - (hours * 1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeInMilliseconds - (hours * 1000 * 60 * 60) - (minutes * 1000 * 60)) / 1000);
  const milliseconds = timeInMilliseconds % 1000;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};

const StopwatchTimer = ({ time, variant }) => (
  <StopwatchTimerStyled variant={variant}>{getFormattedTime(time)}</StopwatchTimerStyled>
);

export default StopwatchTimer;