import styled from "@emotion/styled";
import { COLORS } from "@/constants";

export const ButtonStyled = styled.button`
    font-size: 24px;
    color: ${COLORS.white};
    background-color: ${COLORS.primary};
    height: 125px;
    width: 125px;
    border-radius: 100%;
    position: relative;
    border: none;
    cursor: pointer;
    
    &::after {
        display: block;
        content: "";
        position: absolute;
        top: 4px;
        bottom: 4px;
        left: 4px;
        right: 4px;
        border: solid 4px ${COLORS.black};
        border-radius: 100%;
        background-color: transparent;
    }

    &:disabled {
        opacity: .5;
    }

    ${({ size }) => size === 'small' && `
        font-size: 18px;
        height: 95px;
        width: 95px;
    `}

    ${({ variant }) => variant === 'success' && `
        color: ${COLORS.white};
        background-color: ${COLORS.success}
    `}

    ${({ variant }) => variant === 'danger' && `
        color: ${COLORS.danger};
        background-color: ${COLORS.dangerLight}
    `}
`