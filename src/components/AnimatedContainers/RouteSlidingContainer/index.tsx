import React, { useMemo, PropsWithChildren, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { privateRoutes } from '../../../routes/routes';
import { useTheme } from 'styled-components';

import {Container} from './styles'

const animationHeight = 80

const RouteSlidingContainer: React.FC<PropsWithChildren> = ({ children }) => {
    const { state, pathname } = useLocation();
    const {animations} = useTheme()

    const routes = useMemo(()=>{
        return privateRoutes.map((route)=>(route[0]))
    },[])

    const getInitialY = useCallback(()=>{
        let previousRoute = state.from.pathname.replace('/','')
        let currentRoute = pathname.replace('/','')
        let y = routes.indexOf(previousRoute)<routes.indexOf(currentRoute) ? -animationHeight : animationHeight
        return y
    },[routes, state, pathname])

    return (
        <Container 
            key={pathname}
            initialY={getInitialY()}
            animateEntry={animations.privateContainers}
        >
            {children}
        </Container>
    );
}

export default RouteSlidingContainer;