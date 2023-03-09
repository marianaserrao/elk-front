import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ContainerProps {
    textColor: string;
    fontSize: string;
    flexDirection: string;
    alignItems: string;
}

export const Container = styled(motion.div) <ContainerProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    align-items: ${props => props.alignItems};
    justify-content: center;

    width:100%;
    height:fit-content;

    p{
        margin: 5px auto;

        font-size: ${props => props.fontSize};
        color:${props => props.textColor};
    }
`;
