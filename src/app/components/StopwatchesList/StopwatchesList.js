import React from "react";
import Loader from "@/ui/Loader";
import Button from "@/ui/Button";
import StopwatchListItem from "@/components/StopwatchListItem";
import { isStopwatchRunning } from "@/utils";
import { StopwatchesListStyled, EmptyListMessageStyled } from "./styles";

const StopwatchesList = ({ stopwatches, fetchNextPage, hasNextPage, isLoading }) => {
  if (isLoading) {
    return (
      <Loader />
    )
  }

  if (!isLoading && !stopwatches?.length) {
    return (
      <EmptyListMessageStyled>
        No stopwatches yet
      </EmptyListMessageStyled>
    )
  }

  return (
    <>
      <StopwatchesListStyled>
        {
          stopwatches?.map(({ __id: id, started, toggles }) => (
            <StopwatchListItem
              key={id}
              id={id}
              started={started}
              toggles={toggles}
              isRunning={isStopwatchRunning(started, toggles)}
            />
          ))
        }
      </StopwatchesListStyled>
      {
        hasNextPage && (
          <Button size="small" onClick={fetchNextPage}>More</Button>
        )
      }
    </>
  );
};

export default StopwatchesList;
