import React from "react";
import { useHistory } from "react-router-dom";
import PageLayout from "@/layouts/PageLayout";
import StopwatchesList from "@/components/StopwatchesList";
import { useCreateStopwatch } from "@/hooks/useCreateStopwatch";
import { makeUrl } from "@/utils";
import { ROUTES } from "@/constants";
import Button from "@/ui/Button";
import { useGetStopwatches } from "@/hooks/useGetStopwatches";

const StopwatchesListContainer = () => {
  const history = useHistory();
  const { responseData, fetchNextPage, hasNextPage, isLoading } = useGetStopwatches();

  const { pages } = responseData || {};
  const stopwatches = pages?.flatMap(({ data }) => data?.result)

  const { createStopwatch } = useCreateStopwatch();

  const handleCreatButtonClick = async () => {
    const { __id: id } = await createStopwatch();
    history.push(makeUrl(ROUTES.singleStopwatch, id));
  };

  return (
    <PageLayout>
      <Button onClick={handleCreatButtonClick}>New</Button>
      <StopwatchesList
        stopwatches={stopwatches}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
      />
    </PageLayout>
  )
}

export default StopwatchesListContainer;
