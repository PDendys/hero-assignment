import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import Header from "@/ui/Header";
import PageLayout from "@/layouts/PageLayout";
import ActionButtonsLayout from "@/layouts/ActionButtonsLayout";
import StopwatchTimer from "@/components/StopwatchTimer";
import { useStopwatchTimer } from "@/hooks/useStopwatchTimer";
import { useGetStopwatch} from "@/hooks/useGetStopwatch";
import { useResetStopwatch } from "@/hooks/useResetStopwatch";
import { useToggleStopwatch } from "@/hooks/useToggleStopwatch";
import { useDeleteStopwatch } from "@/hooks/useDeleteStopwatch";
import { ROUTES } from "@/constants";
import Button from "@/ui/Button";

const SingleStopwatchContainer = () => {
  const { id } = useParams();
  const history = useHistory();

  const { stopwatch, isFetching } = useGetStopwatch(id);
  const { resetStopwatch } = useResetStopwatch();
  const { toggleStopwatch } = useToggleStopwatch();
  const { deleteStopwatch } = useDeleteStopwatch();

  const { started, toggles } = stopwatch || {};

  const { time, isRunning, toggle, reset } = useStopwatchTimer({
    started,
    toggles
  });

  const handleResetButtonClick = async () => {
    const timeNow = Date.now();
    await resetStopwatch(id, timeNow);
    await toggleStopwatch(id, timeNow);
    reset();
  }

  const handleToggleButtonClick = async () => {
    await toggleStopwatch(id);
    toggle();
  };

  const handleDeleteButtonClick = async () => {
    await deleteStopwatch(id);
    history.push(ROUTES.home);
  }

  return (
    <PageLayout isLoading={isFetching}>
      <Header backLink={ROUTES.home} />
      <StopwatchTimer time={time} variant="big" />
      <ActionButtonsLayout>
        <Button size="small" onClick={handleResetButtonClick}>Reset</Button>
        <Button
          variant="success"
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
