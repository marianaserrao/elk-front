import React, {PropsWithChildren} from 'react';
import { useTheme } from 'styled-components'

import { Container } from './styles';

interface AppearingContainerProps extends PropsWithChildren {
    displayCondition?: boolean,
    initialOpacity?:number,
    initialHeight?:string|number,
    duration?: number,
}

const AppearingContainer: React.FC<AppearingContainerProps> = ({
    displayCondition=true,
    initialOpacity=0,
    initialHeight=0,
    duration = false,
    children
}) => {
    const {transitions}=useTheme()

    const containerVariant = {
        hidden: {
            height: initialHeight,
            opacity: initialOpacity
        },
        display: {
            height: 'fit-content',
            opacity: 1,
            transition: { duration: duration||transitions.motionDefault}
        }
    }

    return (
        <Container
            initial='hidden'
            animate={displayCondition ? 'display' : 'hidden'}
            exit='hidden'
            variants={containerVariant}
        >
            {children}
        </Container>
    );
}

export default AppearingContainer;