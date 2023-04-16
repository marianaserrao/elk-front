import styled from "styled-components";
import AnimatedContainer from "../../components/AnimatedContainers/Generic";

interface CardInterface {
    fullSize? : boolean;
}

export const MainCardContainer = styled(AnimatedContainer)`

    &{
        display: flex;
        flex-direction: row;
    }

    gap: ${({theme})=>theme.spacings.large};
    @media screen and (min-width: 930px) {
        
        >div{
            flex: 1;
            max-height: 370px;
            height: 370px;
        }
            
    }

    @media screen and (max-width: 930px) {
        &{
            flex-direction: column;
        }

    }
`;

export const SwitchContainer = styled(AnimatedContainer)`

    &{
        display: flex;
        flex-direction: row;
    }

    align-items:center;

    h3{
        font-size: 16px;
    }
`;

export const Card = styled.div<CardInterface>`
    &{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: ${(props) => props.fullSize ? "497px" : "175px"};
        height:${(props) => props.fullSize ? "368px" : "120px"};

        background-color: ${({theme})=>theme.colors.cardBackground};
        box-shadow: ${({theme})=>theme.shadows.default};

        border-radius: ${({theme})=>theme.radius.default};
        padding: 15px;
        align-items:center;
        align-content:center;
    }

    @media screen and (max-width: 930px) {
        width: 100%;
        height: 400px;
    }
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