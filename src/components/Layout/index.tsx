import React, { useMemo } from 'react';
import {Outlet, useLocation} from "react-router-dom"
import { useTheme } from 'styled-components';

import {privateRoutes} from '../../routes/routes'

import RouteSlidingContainer from '../AnimatedContainers/RouteSlidingContainer';
import PageTitle from '../PageTitle';
import Navbar from "./Navbar"

const Layout: React.FC = () => {
  const {colors} = useTheme()
  const {pathname} = useLocation()

  const route = useMemo(()=>(
    privateRoutes.filter((route)=>route[0]===pathname.replace('/',''))[0]
  ),[pathname])

  return (
    <div style={{display:'flex', minHeight: '100vh', backgroundColor:colors.background}}>
      <Navbar/>
      <RouteSlidingContainer>
        <PageTitle title={route[1]}/>
        <Outlet/>
      </RouteSlidingContainer>
    </div>
  );
}

export default Layout;