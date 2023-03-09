import React, {PropsWithChildren} from 'react';
import { useTheme } from 'styled-components'

import { Container } from './styles';

interface AppearingContainerProps extends PropsWithChildren {
    displayCondition: boolean,
    duration?: number,
    textColor?: string,
    fontSize?: string,
    flexDirection?: string,
    alignItems?: string
}

const AppearingContainer: React.FC<AppearingContainerProps> = ({
    displayCondition,
    duration = 0.6,
    textColor,
    fontSize = '14px',
    flexDirection = 'column',
    alignItems = 'center',
    children
}) => {
    const { colors } = useTheme()

    const containerVariant = {
        hidden: {
            height: 0,
            opacity: 0
        },
        display: {
            height: 'fit-content',
            opacity: 1,
            transition: { duration: duration }
        }
    }

    return (
        <Container
            textColor={textColor || colors.error}
            fontSize={fontSize}
            flexDirection={flexDirection}
            alignItems={alignItems}
            initial={false}
            animate={displayCondition ? 'display' : 'hidden'}
            exit='hidden'
            variants={containerVariant}
        >
            {children}
        </Container>
    );
}

export default AppearingContainer;