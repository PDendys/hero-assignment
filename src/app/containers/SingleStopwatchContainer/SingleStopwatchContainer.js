import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import Header from "@/ui/Header";
import Button from "@/ui/Button";
import { ROUTES } from "@/constants";
import { getRunningTime } from "@/utils";
import PageLayout from "@/layouts/PageLayout";
import ActionButtonsLayout from "@/layouts/ActionButtonsLayout";
import StopwatchTimer from "@/components/StopwatchTimer";
import { useStopwatchTimer } from "@/hooks/useStopwatchTimer";
import { useGetStopwatch} from "@/hooks/useGetStopwatch";
import { useResetStopwatch } from "@/hooks/useResetStopwatch";
import { useToggleStopwatch } from "@/hooks/useToggleStopwatch";
import { useDeleteStopwatch } from "@/hooks/useDeleteStopwatch";

const SingleStopwatchContainer = () => {
  const { id } = useParams();
  const history = useHistory();

  const { stopwatch, getStopwatchError, isFetching } = useGetStopwatch(id);
  const { resetStopwatch, isResetStopwatchLoading, resetStopwatchError } = useResetStopwatch();
  const { toggleStopwatch, isToggleStopwatchLoading, toggleStopwatchError } = useToggleStopwatch();
  const { deleteStopwatch } = useDeleteStopwatch();

  const { started, toggles } = stopwatch || {};

  const { time, isRunning, toggle, resStart, setTime } = useStopwatchTimer({
    started,
    toggles
  });

  const handleResetButtonClick = async () => {
    resStart();
    const timeNow = Date.now();
    await resetStopwatch(id, timeNow);
  };

  const handleToggleButtonClick = async () => {
    toggle();
    const updatedResult = await toggleStopwatch(id);
    const { toggles: updatedToggles } = updatedResult || {};

    if(updatedToggles?.length) {
      setTime(getRunningTime(started, updatedToggles));
    }
  };

  const handleDeleteButtonClick = async () => {
    await deleteStopwatch(id);
    history.push(ROUTES.home);
  };

  const isError = getStopwatchError || toggleStopwatchError || resetStopwatchError;

  return (
    <PageLayout isLoading={isFetching} isDisable={isError}>
      <Header backLink={ROUTES.home} />
      <StopwatchTimer time={time} variant="big" isDisabled={isError} />
      <ActionButtonsLayout>
        <Button
          size="small"
          isDisabled={isResetStopwatchLoading}
          onClick={handleResetButtonClick}
        >
          Reset
        </Button>
        <Button
          variant="success"
          isDisabled={isToggleStopwatchLoading}
          onClick={handleToggleButtonClick}
        >
          {isRunning ? 'Stop' : 'Start'}
        </Button>
        <Button size="small" variant="danger" onClick={handleDeleteButtonClick}>Delete</Button>
      </ActionButtonsLayout>
    </PageLayout>
  )
}

export default SingleStopwatchContainer;
