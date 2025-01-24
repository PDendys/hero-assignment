import styled from "@emotion/styled";

export const PageLayoutStyled = styled.div`
    padding: 16px;
    text-align: center;

    ${({ isDisable }) => isDisable && `
        opacity: 0.4;
        pointer-events: none;
    `}
`