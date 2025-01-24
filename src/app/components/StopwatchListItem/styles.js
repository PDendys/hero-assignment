import styled from '@emotion/styled';
import { COLORS } from '../../constants';

export const StopwatchListItemStyled = styled.li`
    border-bottom: solid 1px ${COLORS.primary};
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    
    a {
        width: 100%;
        padding: 16px 10px;
        text-decoration: none;
        display: flex;
        align-items: center;
    }
`;

export const TimeTextStyled = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: ${({ isRunning }) => isRunning ? COLORS.white : COLORS.gray};
    margin: 0;
`;

export const PausedSignStyled = styled.div`
    width: 15px;
    height: 20px;
    background-color: transparent;
    position: relative;
    border: none;
    cursor: pointer;
    margin: 0 0 0 18px;
    
    &::before,
    &::after {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        background-color: ${COLORS.gray};
        width: 6px;
    }

    &::before {
        left: 0;
    }

    &::after {
        right: 0;
    }
`;
