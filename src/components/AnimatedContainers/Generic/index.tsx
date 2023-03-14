import { motion, MotionProps } from 'framer-motion';
import React, { PropsWithChildren} from 'react';
import { useTheme } from 'styled-components';

interface AnimatedContainerProps extends MotionProps{
    initialY?: number,
    initialX?: number,
    initialOpacity?: number,
    exitOpacity?: number,
    duration?:number,
    exitDuration?:number
}

const AnimatedContainer: React.FC<PropsWithChildren<AnimatedContainerProps>> = ({ 
    initialX=0,
    initialY=0,
    initialOpacity=1,
    duration=false,
    exitOpacity=1,
    exitDuration=false,
    children,
    ...rest
}) => {
    const {transitions} = useTheme()

    const containerVariant = {
        initial: {
            y: initialY,
            x:initialX,
            opacity: initialOpacity
        },
        final: {
            y: 0,
            x:0,
            opacity: 1,
            transition: { duration: duration||transitions.motionDefault }
        },
        exit:{
            finalOpacity: exitOpacity,
            transition: { duration: exitDuration||transitions.motionExit }
        }
    }

    return (
        <motion.div
            initial='initial'
            animate='final'
            exit='exit'
            variants={containerVariant}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedContainer;