import styled from "@emotion/styled";
import { COLORS } from "@/constants";

export const HeaderStyled = styled.header`
    text-align: left;
    margin: 0 0 30px;
`;

export const BackIconStyled = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    margin: 0 4px 0 0;
    
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 7px;
        height: 7px;
        border-left: solid 2px ${COLORS.white};
        border-bottom: solid 2px ${COLORS.white};
        transform: translate(-50%, -50%) rotate(45deg);
    }
`;