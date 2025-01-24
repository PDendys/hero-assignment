import styled from '@emotion/styled';
import { COLORS } from '@/constants';

export const StopwatchTimerStyled = styled.h2`
    font-size: 24px;
    font-weight: 400;
    color: ${COLORS.white};
    margin: 0;

    ${({ variant }) => variant === 'big' && `
        font-size: 100px;
        margin: 35px 0;
    `}
`;
