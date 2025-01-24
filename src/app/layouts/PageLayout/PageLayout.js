import React from "react";
import Loader from "@/ui/Loader";
import { PageLayoutStyled } from "./styles";

const PageLayout = ({ isLoading, children }) => {
  return (
    <PageLayoutStyled>
      {
        isLoading
          ? <Loader />
          : <>{children}</>
      }
    </PageLayoutStyled>
  );
};

export default PageLayout;