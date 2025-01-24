import styled from "@emotion/styled";
import { COLORS } from "@/constants";

export const StopwatchesListStyled = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 32px auto;
    max-width: 375px;
`

export const EmptyListMessageStyled = styled.p`
    color: ${COLORS.white};
    padding: 10px 16px;
    margin: 32px auto;
`;