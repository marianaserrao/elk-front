import styled from "styled-components";

interface CardInterface {
    fullSize? : boolean;
}

export const Card = styled.div<CardInterface>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: ${(props) => props.fullSize ? "497px" : "175px"};
    height:${(props) => props.fullSize ? "368px" : "120px"};

    background-color: ${({theme})=>theme.colors.cardBackground};
    box-shadow: ${({theme})=>theme.shadows.default};

    border-radius: ${({theme})=>theme.radius.default};
    padding: 15px;
    text-align: center;
    align-items:center;
    align-content:center;
`;

interface PaddingInterface{
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

export const Padding = styled.div<PaddingInterface>`
    padding-top: ${props => `${props.top}`}px;
    padding-bottom: ${props => `${props.bottom}`}px;
    padding-left: ${props => `${props.left}`}px;
    padding-right: ${props => `${props.right}`}px;
`;