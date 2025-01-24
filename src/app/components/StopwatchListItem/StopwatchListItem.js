import React from 'react';
import { Link } from 'react-router-dom';
import { useStopwatchTimer } from '@/hooks/useStopwatchTimer';
import { makeUrl } from '@/utils';
import { ROUTES } from '@/constants';
import {
  StopwatchListItemStyled,
  TimeTextStyled,
  PausedSignStyled
} from './styles';
import StopwatchTimer from "@/components/StopwatchTimer";

const StopwatchListItem = ({ id, started, toggles, isRunning  }) => {
  const { time, toggle } = useStopwatchTimer({ started, toggles });

  return (
    <StopwatchListItemStyled isRunning={isRunning}>
      <Link to={makeUrl(ROUTES.singleStopwatch, id)}>
        <StopwatchTimer time={time} />
        {
          !isRunning && (
            <PausedSignStyled />
          )
        }
      </Link>
    </StopwatchListItemStyled>
  );
};

export default StopwatchListItem;