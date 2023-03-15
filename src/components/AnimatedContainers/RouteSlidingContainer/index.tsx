import React, { useMemo, PropsWithChildren, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { privateRoutes } from '../../../routes/routes';
import { useTheme } from 'styled-components';

import {Container} from './styles'
import { removeLastBar } from '../../../utils/paths';

const animationHeight = 80

const RouteSlidingContainer: React.FC<PropsWithChildren> = ({ children }) => {
    const { state, pathname } = useLocation();
    const {animations} = useTheme();

    const routePaths = useMemo(()=>{
        return privateRoutes.map((route)=>(route.path))
    },[])

    const getInitialY = useCallback(()=>{
        let previousPath = state?.from.pathname
        let currentPath = removeLastBar(pathname)
        let y = routePaths.indexOf(previousPath)<routePaths.indexOf(currentPath) ? -animationHeight : animationHeight
        return y
    },[routePaths, state, pathname])

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