import React from "react";
import Link from "@/ui/Link";
import { BackIconStyled, HeaderStyled } from "./styles";

const Header = ({ backLink }) => (
  <HeaderStyled>
    <Link to={backLink}>
      <BackIconStyled />
      Go back
    </Link>
  </HeaderStyled>
);

export default Header;
