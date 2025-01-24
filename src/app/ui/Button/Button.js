import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({
 children,
 onClick,
 isDisabled = false,
 size = 'regular',
 variant = 'regular'
}) => (
  <ButtonStyled
    size={size}
    disabled={isDisabled}
    variant={variant}
    onClick={onClick}
  >
    {children}
  </ButtonStyled>
);

export default Button;