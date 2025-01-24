import React from "react";
import { LinkStyled } from "./styles";

const Link = ({ to, children }) => (
  <LinkStyled to={to}>{children}</LinkStyled>
);

export default Link;
