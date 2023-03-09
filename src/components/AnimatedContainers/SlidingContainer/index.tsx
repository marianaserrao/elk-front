import React, { useMemo, PropsWithChildren, useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { privateRoutes } from '../../../routes/routes';

import { Container } from './styles';

interface SlidingContainerProps extends PropsWithChildren{
    goesUp?: boolean,
    tabsOnLeft?: string[]
}

// const animationHeight = -500
const animationHeight = 120

const SlidingContainer: React.FC<SlidingContainerProps> = ({ children }) => {
    const { state, pathname } = useLocation();

    const routes = useMemo(()=>{
        return privateRoutes.map((route)=>(route[0]))
    },[])

    const getInitialY = useCallback(()=>{
        let previousRoute = state.from.pathname.replace('/','')
        let currentRoute = pathname.replace('/','')
        let y = routes.indexOf(previousRoute)<routes.indexOf(currentRoute) ? -animationHeight : animationHeight
        console.log(routes.indexOf(previousRoute))
        return y
    },[routes, state, pathname])

    useEffect(()=>{        
        setInitialY(getInitialY())
    },[pathname, getInitialY])
   
    const [initialY, setInitialY] = useState(() => {
        return getInitialY()
    })

    const containerVariant = {
        initial: {
            y: initialY,
            opacity: 0
        },
        final: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        },
        exit:{
            opacity: 0,
            transition: { duration: 2 }
        }
    }

    return (
        <Container
            initial='initial'
            animate='final'
            exit='exit'
            variants={containerVariant}
        >
            {children}
        </Container>
    );
}

export default SlidingContainer;