import React from "react";
import { getFormattedTime } from "@/utils/stopwatch";
import { StopwatchTimerStyled } from "./styles";

const StopwatchTimer = ({ time, variant, isDisabled }) => (
  <StopwatchTimerStyled variant={variant}>{isDisabled ? "00:00:00:00" : getFormattedTime(time)}</StopwatchTimerStyled>
);

export default StopwatchTimer;