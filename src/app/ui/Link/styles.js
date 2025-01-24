import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { COLORS } from '@/constants';

export const LinkStyled = styled(Link)`
    font-size: 20px;
    letter-spacing: 1px;
    color: ${COLORS.white};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
`