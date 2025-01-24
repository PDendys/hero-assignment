import React from "react";
import Loader from "@/ui/Loader";
import { PageLayoutStyled } from "./styles";

const PageLayout = ({ isLoading, isDisable = false, children }) => {
  return (
    <PageLayoutStyled isDisable={isDisable}>
      {
        isLoading
          ? <Loader />
          : <>{children}</>
      }
    </PageLayoutStyled>
  );
};

export default PageLayout;